"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowBigLeft, ArrowBigRight, Star } from "lucide-react";
import { useTab } from "@/Context/TabContext";
import { useUser } from "@/Context/userContext";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { useBooking } from "@/Context/BookingContext";
import ProfessionalCard from "../../../../Components/Card/ProfessionalCard";
import { Loader } from "../../../../Components/Loader";
import { Tracker } from "../../../../Components/Tracker";

const Professionals = () => {
  const router = useRouter();
  const { token } = useUser();
  const type = useTab(); // category like "hair", "massage"
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const itemsPerPage = 6;
  const { setBooking } = useBooking();
  const [avalable, setAvailable] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { booking } = useBooking();
  const branchId = booking?.branchId;

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    hasMore: false,
  });

  const pageCount = pagination?.totalPages;

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;

    getEmployees(selectedPage);
  };

  const checkAvialbily = (data) => {
    setAvailable(data);
  };
  // Fetch professionals
  useEffect(() => {
    if (token && type) {
      getEmployees();
    }
  }, [token, type]);

  const getEmployees = async (page = 1) => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        limit: itemsPerPage,
        category: type,
        branchId,
        page,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/getEmployees?${query}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const data = await response.json();
      setEmployees(data?.data || []);
    } catch (err) {
      console.error("Failed to fetch employees:", err);
    } finally {
      setLoading(false);
    }
  };
  const nextPage = () => {
    if (selectedId) {
      const selectedEmployee = employees.find((emp) => emp._id === selectedId);
      const employeeType = selectedEmployee?.serviceType;
      const service = booking?.serviceCategory;
      console.log(service);

      if (!selectedEmployee) {
        toast.error("Selected employee not found!");
        return;
      }
      if (!avalable) {
        toast.error("Employee Not Available Today");
        return;
      }

      if (employeeType !== service) {
        toast.error(
          `Mismatch: "${service}" service and "${employeeType}" professional. Please select accordingly.`
        );

        return;
      }

      setBooking((prev) => ({
        ...prev,
        employeeId: selectedEmployee._id,
        employeeName: `${selectedEmployee.firstName} ${selectedEmployee.lastName}`,
        employeeWorkingHours: selectedEmployee.workingHours || [],
      }));

      router.push("/BookAppointment/SelectDate");
    } else {
      toast.error("Please Select a Professional!!!");
    }
  };

  console.log(employees);

  return (
    <div className="px-6 md:px-10 max-w-full">
      <h2 className="text-[#1D1B1B] text-[22px] font-semibold mb-4">
        Choose Professional
      </h2>

      {loading ? (
        <Loader />
      ) : employees?.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 justify-center">
          {employees.map((employee) => (
            <ProfessionalCard
              key={employee._id}
              employee={employee}
              selected={selectedId === employee._id}
              onSelect={() => setSelectedId(employee._id)}
              checkAvailability={checkAvialbily}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Employees found</p>
      )}
      <div className="flex flex-row justify-end">
        {" "}
        <ReactPaginate
          breakLabel="..."
          nextLabel=<ArrowBigRight color="#ff6b00" />
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel=<ArrowBigLeft color="#ff6b00" />
          renderOnZeroPageCount={null}
          containerClassName="flex mt-4 gap-2 cursor-pointer"
          pageClassName="px-3 py-1 border border-gray-300 rounded "
          previousClassName="mt-1 "
          nextClassName="mt-1"
          activeClassName="bg-[#ff6b00] "
        />
      </div>

      <button
        className="bg-[var(--orange)] text-white rounded-[10px] w-full text-xl font-semibold my-6 py-3 cursor-pointer"
        onClick={nextPage}
      >
        Continue
      </button>
    </div>
  );
};

export default Professionals;

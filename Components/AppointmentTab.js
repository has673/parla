"use client";
import React, { useState, useEffect } from "react";
import AppointmentButton from "./Buttons/AppointmentButton";
import AppointmentCard from "./Card/AppointmentCard";
import { useUser } from "@/Context/userContext";
import { Loader } from "./Loader";

import ReactPaginate from "react-paginate";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useLanguage } from "@/Context/LanguageContext";

const AppointmentTab = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const { token } = useUser();
  const { t } = useLanguage();
  const itemsPerPage = 5;
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    hasMore: false,
  });

  const pageCount = pagination?.totalPages;

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;

    getAppointments(selectedPage);
  };

  const getAppointments = async (page = 1) => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        limit: itemsPerPage,
        type,
        page,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/getAppointments?${query}`,
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
      setAppointments(data.data);
      setPagination(data.pagination); // Save pagination info
    } catch (err) {
      console.error("Failed to fetch services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAppointments();
  }, [type, token]);
  return (
    <div className="px-4">
      <div className="w-full flex  justify-end p-2">
        {" "}
        <AppointmentButton />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {appointments?.length > 0 ? (
            appointments.map((appointment) => (
              <AppointmentCard
                key={appointment._id}
                appointment={appointment}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">{t("ampText")}</p>
          )}
        </>
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
    </div>
  );
};

export default AppointmentTab;

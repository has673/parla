"use client";
import { ArrowBigLeft, ArrowBigRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { useTab } from "@/Context/TabContext";
import ServiceCard from "../../../Components/Card/ServiceCard";
import { Loader } from "../../../Components/Loader";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";
import { useBooking } from "@/Context/BookingContext";
import { useUser } from "@/Context/userContext";
import { ServiceTracker } from "../../../Components/Tracker";

const ChooseProfessional = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState([]);
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const [popular, setPopular] = useState(true);
  const itemsPerPage = 10;

  const { setBooking } = useBooking();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    hasMore: false,
  });

  const pageCount = pagination?.totalPages;

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;

    getServices(selectedPage);
  };

  const type = useTab();
  const { token, userData } = useUser();

  const getServices = async (page = 1) => {
    try {
      setLoading(true);
      const query = new URLSearchParams({
        limit: itemsPerPage,
        category: type,
        page,
        gender,
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/Appointment/getServices?${query}`,
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
      setServices(data.data);
      setPagination(data.pagination); // Save pagination info
    } catch (err) {
      console.error("Failed to fetch services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, [gender, type, token]);
  const nextPage = () => {
    if (selectedId) {
      const selectedService = services.find(
        (service) => service._id === selectedId
      );
      console.log(selectedService, "service");
      let discountDetail = {};
      if (selectedService?.discount === true) {
        discountDetail.discountPrice = selectedService?.discountPrice;
        discountDetail.discountPercentage = selectedService?.discountPercentage;
        discountDetail.discountStartDate = selectedService?.discountStartDate;
        discountDetail.discountEndDate = selectedService?.discountEndDate;
        discountDetail.onlyBetweenTime = selectedService?.onlyBetweenTime;
        discountDetail.onlyBetweenStartTime =
          selectedService?.onlyBetweenStartTime;
        discountDetail.onlyBetweenEndTime = selectedService?.onlyBetweenEndTime;
        discountDetail.onlyBetweenDays = selectedService?.onlyBetweenDays;

        setBooking((prev) => ({
          ...prev,
          serviceId: selectedId,
          serviceName: selectedService.serviceName,
          serviceMints: selectedService.serviceMints,
          price: selectedService.price,
          branchId: selectedService.branchId,
          serviceCategory: selectedService.category,
          discount: true,
          discountDetail: discountDetail,
        }));
      } else {
        setBooking((prev) => ({
          ...prev,
          serviceId: selectedId,
          serviceName: selectedService.serviceName,
          serviceMints: selectedService.serviceMints,
          price: selectedService.price,
          branchId: selectedService.branchId,
          serviceCategory: selectedService.category,
          discount: false,
          discountDetail: null,
        }));
      }

      router.push(`/BookAppointment/ChooseProfessionals`);
    } else {
      toast.error("Please Select a Service!!!");
    }
  };
  return (
    <div className="px-4">
      <div>
        <div className="flex md:flex-row flex-col gap-x-3 my-4">
          <div className="flex md:block justify-center">
            <div className="relative h-30 w-30">
              <Image
                src={userData?.image || "/images/courtney.png"}
                fill
                alt="user"
                className="object-cover rounded-full border border-[var(--orange)]"
              />
            </div>
          </div>

          <div className="flex flex-col mt-2 md:block items-center">
            <h3 className="text-[22px] font-medium ">
              {userData?.firstName} {userData?.lastName}
            </h3>
            <div className="flex md:flex-row flex-col justify-between w-ful">
              {" "}
              <div className="flex items-center gap-1 text-[#FFC700] text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} fill="currentColor" stroke="none" size={16} />
                ))}
                <span className="text-black font-medium ml-1">5.0</span>
                <span className="text-[#000000]">(110)</span>
              </div>
              <div className="flex gap-x-2 justify-center md:my-0 my-2">
                <div className="w-8 h-8 rounded-full bg-[#E8E8E8] flex justify-center items-center ">
                  <span
                    className="border w-4 h-4 rounded-full flex justify-center items-center text-xs p-1 cursor-pointer"
                    onClick={() => router.push("/Info")}
                  >
                    {" "}
                    !
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8E8E8] flex justify-center items-center ">
                  <span
                    className="border w-4 h-4 rounded-full flex justify-center items-center text-xs p-1"
                    onClick={() => router.push("/Question")}
                  >
                    {" "}
                    ?
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8E8E8] flex justify-center items-center">
                  <Heart color="black" height={16} width={16} />
                </div>
              </div>
            </div>

            <div className="md:w-2/5">
              {" "}
              <p className="text-base font-normal text-[var(--color-dark)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim{" "}
                <span className="text-[var(--orange)]">Read More</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:justify-around gap-6 py-4">
        {/* Male */}
        <div
          className={`${
            popular
              ? " bg-[var(--orange)] text-white"
              : "bg-white text-[#000000C9]"
          } rounded-[13px] flex justify-center items-center px-3 py-2 cursor-pointer`}
          onClick={() => {
            setGender("");
            setPopular(true);
          }}
        >
          {" "}
          Popular{" "}
        </div>
        <h3
          onClick={() => {
            setGender("male");
            setPopular(false);
          }}
          className={`cursor-pointer   md:text-[22px] text-base font-medium px-4 rounded-lg transition-all duration-200
                ${gender === "male" ? " text-[#FF6B00]" : " text-[#000000C9]"}
              `}
        >
          Male
        </h3>

        {/* Female */}
        <div
          onClick={() => {
            setGender("female");
            setPopular(false);
          }}
          className={`cursor-pointer  md:text-[22px] text-base font-medium px-4  rounded-lg transition-all duration-200 flex gap-x-3
                ${gender === "female" ? " text-[#FF6B00]" : " text-[#000000C9]"}
              `}
        >
          Female
        </div>
        <button className=" h-6 w-6 flex justify-center items-center ">
          <Image src="/filterblack.png" width={12} height={12} alt="filter" />
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {services?.length > 0 ? (
            services.map((service) => (
              <ServiceCard
                key={service._id}
                service={service}
                selected={selectedId === service._id}
                onSelect={() => setSelectedId(service._id)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No services found</p>
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

      <div className="flex md:flex-row flex-col  gap-x-3 md:items-center gap-y-6  w-full justify-between my-4 md:px-12">
        <div className=" w-2/3 h-[78px]">
          <ServiceTracker />
        </div>

        <span
          className="text-xl font-semibold text-[var(--orange)] cursor-pointer md:text-right text-center"
          onClick={nextPage}
        >
          Continue
        </span>
      </div>
    </div>
  );
};

export default ChooseProfessional;

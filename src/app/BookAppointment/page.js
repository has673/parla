"use client";
import { ArrowBigLeft, ArrowBigRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";
import { useTab } from "@/Context/TabContext";
import ServiceCard from "../../../Components/Card/ServiceCard";
import { Loader } from "../../../Components/Loader";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";

const ChooseProfessional = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [services, setServices] = useState([]);
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [popular, setPopular] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = services?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(services?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % services?.length;
    setItemOffset(newOffset);
  };

  const type = useTab();

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    const token = localStorage.getItem("token");

    if (stored) {
      setUser(JSON.parse(stored));
    }
    if (token) {
      setToken(token);
    }
  }, []);

  const getServices = async () => {
    console.log(type, "type");
    try {
      setLoading(true);
      const query = new URLSearchParams({
        limit: 10,
        category: type,
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
          // credentials: "include", // ← Comment out temporarily
        }
      );
      const data = await response.json();

      setServices(data.data);
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
      router.push(`/BookAppointment/ChooseProfessionals/${selectedId}`);
    } else {
      toast.error("Please Select a Service!!!");
    }
  };
  return (
    <div className="px-4">
      <div>
        <div className="flex flex-row gap-x-3 my-4">
          <div className="relative md:h-30 md:w-30  h-15 w-15">
            <Image
              src={user?.image || "/images/courtney.png"}
              fill
              alt="user"
              className=" object-cover rounded-full border border-[var(--orange)]"
            />
          </div>
          <div className="flex flex-col mt-2">
            <h3 className="text-[22px] font-medium ">
              {user?.firstName} {user?.lastName}
            </h3>
            <div className="flex items-center gap-1 text-[#FFC700] text-sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} fill="currentColor" stroke="none" size={16} />
              ))}
              <span className="text-black font-medium ml-1">5.0</span>
              <span className="text-[#000000]">(110)</span>
            </div>
            <div className="md:w-2/5">
              {" "}
              <p className="text-base font-normal text-[#1E232C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim{" "}
                <span className="text-[var(--orange)]">Read More</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-around gap-6 py-4">
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
          className={`cursor-pointer   md:text-[22px] text-sm font-medium px-4 rounded-lg transition-all duration-200
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
          className={`cursor-pointer  md:text-[22px] text-sm font-medium px-4  rounded-lg transition-all duration-200 flex gap-x-3
                ${gender === "female" ? " text-[#FF6B00]" : " text-[#000000C9]"}
              `}
        >
          Female
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {services?.length > 0 ? (
            currentItems.map((service) => (
              <>
                <ServiceCard
                  key={service._id}
                  service={service}
                  selected={selectedId === service._id}
                  onSelect={() => setSelectedId(service._id)}
                />
              </>
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

      <div className="flex md:flex-row flex-col gap-x-3 items-center w-full justify-between my-4">
        <div className="relative w-3xl h-[78px]">
          <Image
            src="/images/progress.png"
            fill
            className=" object-cover"
            alt="progress"
          />
        </div>

        <span
          className="text-xl font-semibold text-[var(--orange)] cursor-pointer"
          onClick={nextPage}
        >
          Continue
        </span>
      </div>
    </div>
  );
};

export default ChooseProfessional;

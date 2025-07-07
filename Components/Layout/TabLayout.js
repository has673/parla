"use client";
import Image from "next/image";
import PeopleCard from "../Card/PeopleCard";
import { useEffect, useState } from "react";
import { getDashboardData } from "@/app/actions/getDashboardData";
import ReactPaginate from "react-paginate";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import ProviderCard from "../Card/ProviderCard";
import { Loader } from "../Loader";

export const TabLayout = ({ type }) => {
  //type is to check for example hair beatuy massage
  const [itemOffset, setItemOffset] = useState(0);
  const [providers, setProviders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // default page is 1

  const itemsPerPage = 3;
  const [loading, setLoading] = useState(false);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = providers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(providers.length / itemsPerPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1; // pages are 0-indexed in ReactPaginate
    setCurrentPage(selectedPage);
    const newOffset = ((selectedPage - 1) * itemsPerPage) % providers.length;
    setItemOffset(newOffset);
  };

  const token = localStorage.getItem("token");
  const [gender, setGender] = useState("male");
  const fetchDashboardData = async () => {
    setLoading(true);
    const data = await getDashboardData(type, gender, token, currentPage);
    console.log(data);
    if (data.status === 200 && data?.datas.length > 0) {
      setProviders(data?.datas || []);
      setLoading(false);
      return;
    } else {
      if (data?.datas.length === 0) {
        setProviders(data?.datas || []);
        setLoading(false);
      }
    }
  };
  console.log(providers);
  useEffect(() => {
    fetchDashboardData();
  }, [gender, type]);
  return (
    <div>
      {/* Row of PeopleCards */}
      <div className="flex flex-row flex-wrap justify-around gap-4 px-3 py-6">
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="Jane Smith" />
        <PeopleCard Name="Mike Ross" />
        <PeopleCard Name="Alice Brown" />
        <PeopleCard Name="Rachel Green" />
      </div>
      {/* Full-width image at the bottom */}
      <div className="relative w-full h-[148px] mt-6 rounded-lg overflow-hidden ">
        <Image src="/main.png" alt="Banner" fill className="object-cover" />
      </div>
      <div className="flex justify-center md:justify-around gap-6 py-4">
        {/* Male */}

        <h3 className="md:text-[22px] text-sm text-wrap text-[#1D1B1B] font-medium px-4 ">{` ${providers.length} Results`}</h3>

        <h3
          onClick={() => setGender("male")}
          className={`cursor-pointer   md:text-[22px] text-sm font-medium px-4 rounded-lg transition-all duration-200
          ${gender === "male" ? " text-[#FF6B00]" : " text-[#000000C9]"}
        `}
        >
          Male
        </h3>

        {/* Female */}
        <div
          onClick={() => setGender("female")}
          className={`cursor-pointer  md:text-[22px] text-sm font-medium px-4  rounded-lg transition-all duration-200 flex gap-x-3
          ${gender === "female" ? " text-[#FF6B00]" : " text-[#000000C9]"}
        `}
        >
          Female
        </div>
        <button className="bg-[#FF6B00] rounded-md md:h-8 md:w-8  h-6 w-6 flex justify-center items-center ">
          <Image src="/filter.png" width={12} height={12} alt="filter" />
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : providers.length > 0 ? (
        providers.map((provider, idx) => (
          <ProviderCard provider={provider} key={idx} />
        ))
      ) : (
        <div className="text-center text-gray-500 py-4">
          No providers found.
        </div>
      )}

      <div className="flex flex-row justify-center">
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

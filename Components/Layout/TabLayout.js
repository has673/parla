"use client";
import Image from "next/image";
import PeopleCard from "../Card/PeopleCard";
import { useEffect, useState } from "react";
import { getDashboardData } from "@/app/actions/getDashboardData";
import DiscountCard from "../Card/DiscountCard";

export const TabLayout = ({ type }) => {
  const [gender, setGender] = useState("male");
  const fetchDashboardData = async () => {
    //   setLoading(true);
    const data = await getDashboardData(type, gender);
    console.log(data);
    // if (data) {
    //     setPets(data?.datas || []);
    //     setLoading(false);
    //     return;
    //   }
  };
  useEffect(() => {
    fetchDashboardData();
  }, [gender]);
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
      <div className="flex justify-center gap-6 py-4">
        {/* Male */}
        <h3
          onClick={() => setGender("male")}
          className={`cursor-pointer text-[22px] font-medium px-4 py-2 rounded-lg transition-all duration-200
          ${gender === "male" ? " text-[#FF6B00]" : " text-[#000000C9]"}
        `}
        >
          Male
        </h3>

        {/* Female */}
        <h3
          onClick={() => setGender("female")}
          className={`cursor-pointer text-[22px] font-medium px-4 py-2 rounded-lg transition-all duration-200
          ${gender === "female" ? " text-[#FF6B00]" : " text-[#000000C9]"}
        `}
        >
          Female
        </h3>
      </div>
      <DiscountCard />
    </div>
  );
};

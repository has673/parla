"use client";
import React, { useEffect } from "react";
import PeopleCard from "../../../../Components/Card/PeopleCard";
import Image from "next/image";
// import { getDashboardData } from "@/app/actions/getDashboardData";

const Hair = () => {
  // const fetchDashboardData = async () => {
  //   setLoading(true);
  //   const data = await getDashboardData(userId);
  //   if (data) {
  //     setPets(data?.datas || []);
  //     setLoading(false);
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   fetchDashboardData();
  // }, []);
  return (
    <div>
      <div className="flex flex-row  justify-around  px-3 py-6">
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
        <PeopleCard Name="John Doe" />
      </div>
      <div className="relative md:w-full h-[148px] ">
        <Image
          src="/main.png"
          fill
          className="object-cover flex justify-center items-center p-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hair;

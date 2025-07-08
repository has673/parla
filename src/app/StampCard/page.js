"use client";
import React, { useState } from "react";
import Sidebar from "../../../Components/Layout/Sidebar";
import HeaderTab from "../../../Components/Layout/HeaderTab";

import Favourite from "../../../Components/Layout/favourite";
import AppointmentButton from "../../../Components/Buttons/AppointmentButton";
import Badge from "../../../Components/Card/Badge";
import Image from "next/image";
import StampcardInfo from "../../../Components/StampInfo";
import StampCardList from "../../../Components/StampCardList";

// Define your tabs and their labels
const TABS = [
  { path: "stampcard", label: "Stamp Card" },
  { path: "works", label: "How does it works" },
];

const StampCard = () => {
  const [activeTab, setActiveTab] = useState("stampcard"); // default

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Favourite"
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          <div className="relative md:w-[776px] md:h-[127px] w-[300px] h-[100px] flex justify-center items-center  mx-auto my-5">
            {/* Background image */}
            <Image
              src="/badge.png"
              alt="Background"
              fill
              className="object-cover "
            />
            <span className="text-center text-white font-bold text-base z-10 absolute bottom-24">
              Busra Zewbz
            </span>
            {/* Overlay badge */}
            <Badge className="h-12 w-12 bg-white rounded-full flex justify-center items-center absolute  z-10" />
          </div>
          {activeTab === "stampcard" && <StampCardList />}
          {activeTab === "works" && <StampcardInfo />}
        </div>
      </div>
    </div>
  );
};

export default StampCard;

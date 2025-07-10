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
import ActivityScreen from "../../../Components/ActivityTable";

// Define your tabs and their labels
const TABS = [
  { path: "offers", label: "You Claimed Offers" },
  { path: "history", label: "Point History" },
];

const Points = () => {
  const [activeTab, setActiveTab] = useState("offers"); // default

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Points Details"
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          <div
            className="relative md:w-[776px] md:h-[127px] w-[300px] h-[100px] flex justify-center items-center  mx-auto my-5"
            style={{
              boxShadow:
                "-15.5px 15.5px 15.5px 0px #FFFFFF1A inset, 15.5px -15.5px 15.5px 0px #C251001A inset",
              backdropFilter: "blur(31px)",
            }}
          >
            {/* Background image */}
            <Image
              src="/badge.png"
              alt="Background"
              fill
              className="object-cover "
            />
            <div className="relative flex flex-col items-center justify-center h-full w-full">
              {/* Name */}
              <span className="text-white font-bold text-base z-10 absolute top-6">
                Busra Zewbz
              </span>

              {/* Score */}
              <h2 className="text-[var(--orange)] font-extrabold text-4xl z-10 absolute bottom-10">
                100.0
              </h2>

              {/* Points label */}
              <span className="text-white font-medium text-[12px] z-10 absolute bottom-6">
                Points
              </span>
            </div>

            {/* Overlay badge */}
          </div>
          {activeTab === "offers" && <StampCardList />}
          {activeTab === "history" && <ActivityScreen />}
        </div>
      </div>
    </div>
  );
};

export default Points;

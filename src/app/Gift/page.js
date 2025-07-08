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
  { path: "gift", label: "Gift" },
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
        title="Gift"
      />

      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          {activeTab === "stampcard" && <StampCardList />}
          {activeTab === "works" && <StampcardInfo />}
        </div>
      </div>
    </div>
  );
};

export default StampCard;

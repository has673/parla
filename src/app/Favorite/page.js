"use client";
import React, { useState } from "react";
import Sidebar from "../../../Components/Layout/Sidebar";
import HeaderTab from "../../../Components/Layout/HeaderTab";

import Favourite from "../../../Components/Layout/favourite";
import AppointmentButton from "../../../Components/Buttons/AppointmentButton";
import Badge from "../../../Components/Card/Badge";

// Define your tabs and their labels
const TABS = [
  { path: "salon", label: "Salon" },
  { path: "professionals", label: "Professionals" },
];

const Favorite = () => {
  const [activeTab, setActiveTab] = useState("salon"); // default

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
          {activeTab === "salon" && <Favourite type="salon" />}
          {activeTab === "professionals" && <Favourite type="professionals" />}
          <div className="flex w-full justify-center md:justify-end">
            <AppointmentButton className="text-white rounded-[10px] text-[11px] font-semibold py-4 px-2 bg-[var(--orange)] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;

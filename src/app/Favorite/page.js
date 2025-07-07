"use client";
import React, { useState } from "react";
import Sidebar from "../../../Components/Layout/Sidebar";
import HeaderTab from "../../../Components/Layout/HeaderTab";

import Favourite from "../../../Components/Layout/favourite";

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
        </div>
      </div>
    </div>
  );
};

export default Favorite;

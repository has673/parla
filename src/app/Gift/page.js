"use client";
import React, { useState } from "react";
import Sidebar from "../../../Components/Layout/Sidebar";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import StampcardInfo from "../../../Components/StampInfo";
import ShareExperienceForm from "../../../Components/ExperienceForm";

// Define your tabs and their labels

const StampCard = () => {
  const TABS = [
    { path: "gift", label: "Gift" },
    { path: "works", label: "How does it works" },
  ];
  const [activeTab, setActiveTab] = useState("gift"); // default

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
          {activeTab === "gift" && <ShareExperienceForm />}
          {activeTab === "works" && <StampcardInfo />}
        </div>
      </div>
    </div>
  );
};

export default StampCard;

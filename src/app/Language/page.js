"use client";
import React, { useState } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import LanguageSwitcher from "../../../Components/LanguageSwitcher"; // adjust path if needed

const Language = () => {
  const [activeTab, setActiveTab] = useState("hair"); // default

  return (
    <div>
      <HeaderTab
        links={[]} // or provide tab links if needed
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Account"
      />
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Language Settings</h2>
            <LanguageSwitcher />
          </div>

          {/* Optional: Render different content based on activeTab */}
        </div>
      </div>
    </div>
  );
};

export default Language;

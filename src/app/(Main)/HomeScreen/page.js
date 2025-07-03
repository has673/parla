"use client";
import React, { useState } from "react";
import HeaderTab from "../../../../Components/Layout/HeaderTab";
import { TabLayout } from "../../../../Components/Layout/TabLayout";
import Sidebar from "../../../../Components/Layout/Sidebar";

// Define your tabs and their labels
const TABS = [
  { path: "hair", label: "Hair" },
  { path: "massage", label: "Massage" },
  { path: "beauty", label: "Beauty" },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("hair"); // default

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full p-4">
          {activeTab === "hair" && <TabLayout type="hair" />}
          {activeTab === "massage" && <TabLayout type="massage" />}
          {activeTab === "beauty" && <TabLayout type="beauty" />}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

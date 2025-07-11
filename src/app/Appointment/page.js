"use client";
import React, { useState } from "react";
import AppointmentTab from "../../../Components/AppointmentTab";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";

// Define your tabs and their labels
const TABS = [
  { path: "active", label: "Active" },
  { path: "waiting", label: "Waiting" },
  { path: "history", label: "History" },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("active"); // default

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
          {activeTab === "active" && <AppointmentTab type="active" />}
          {activeTab === "waiting" && <AppointmentTab type="waiting" />}
          {activeTab === "history" && <AppointmentTab type="history" />}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

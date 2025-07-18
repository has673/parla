"use client";
import React, { useState } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import NotificationTab from "../../../Components/NotificationTab";

// Define your tabs and their labels
const TABS = [
  { path: "today", label: "Today" },
  { path: "pastdays", label: "Last 7 Days" },
  { path: "older", label: "Older" },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("today"); // default

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Notifications"
      />
      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          {activeTab === "today" && <NotificationTab type="today" />}
          {activeTab === "last 7 days" && (
            <NotificationTab type="last 7 days" />
          )}
          {activeTab === "older" && <NotificationTab type="older" />}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

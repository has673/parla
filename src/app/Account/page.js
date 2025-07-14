"use client";
import React, { useState } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import Account from "../../../Components/Layout/Account";

// Define your tabs and their labels
const TABS = [
  { path: "hair", label: "Hair" },
  { path: "massage", label: "Massage" },
  { path: "beauty", label: "Beauty" },
];

const AccountScreen = () => {
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
          {activeTab === "hair" && <Account type="active" />}
          {activeTab === "massage" && <Account type="waiting" />}
          {activeTab === "beauty" && <Account type="history" />}
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;

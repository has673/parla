"use client";
import React, { useState } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import Account from "../../../Components/Layout/Account";

// Define your tabs and their labels
// const TABS = [
//   { path: "hair", label: "Hair" },
//   { path: "massage", label: "Massage" },
//   { path: "beauty", label: "Beauty" },
// ];

const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState("hair"); // default

  return (
    <div>
      <HeaderTab
        links={[]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Account"
      />
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full p-2">
          <Account />
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;

"use client";

import React, { useState } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";

const TABS = [
  { path: "hair", label: "Hair" },
  { path: "massage", label: "Massage" },
  { path: "beauty", label: "Beauty" },
];

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("hair");

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Choose Professional"
      />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

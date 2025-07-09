"use client";

import React, { useState } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import { TabContext } from "@/Context/TabContext";

const TABS = [
  { path: "hair", label: "Hair" },
  { path: "massage", label: "Massage" },
  { path: "beauty", label: "Beauty" },
];

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("hair");

  return (
    <TabContext.Provider value={activeTab}>
      <div>
        <HeaderTab
          links={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Choose Professional"
        />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </TabContext.Provider>
  );
};

export default Layout;

"use client";

import { useState } from "react";
import Sidebar from "../../../Components/Layout/Sidebar";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import { TabLayout } from "../../../Components/Layout/TabLayout";

// Define your tabs and their labels
const TABS = [
  { path: "hair", label: "Hair" },
  { path: "massage", label: "Massage" },
  { path: "beauty", label: "Beauty" },
];

export default function Layout() {
  const [activeTab, setActiveTab] = useState("hair"); // Default tab

  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}

// Reusable layout for each tab

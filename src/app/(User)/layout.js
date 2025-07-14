"use client";

import React, { useState } from "react";
import { HomeTabContext } from "@/Context/HomeTabContext";
import Sidebar from "../../../Components/Layout/Sidebar";
import Header from "../../../Components/Layout/Header";

const TABS = [
  { path: "/Info", label: "Info" },
  { path: "/Rating", label: "Rating" },
  { path: "/Question", label: "Question" },
  { path: "/Professionals", label: "Professionals" },
  { path: "/Discount", label: "Discount" },
];

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Info");

  return (
    <div>
      <Header
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
  );
};

export default Layout;

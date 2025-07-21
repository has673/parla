"use client";
import React, { useState } from "react";
import HeaderTab from "../../../../Components/Layout/HeaderTab";
import { TabLayout } from "../../../../Components/Layout/TabLayout";
import Sidebar from "../../../../Components/Layout/Sidebar";
import { useLanguage } from "@/Context/LanguageContext";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("hair"); // default
  const { t } = useLanguage();

  // ✅ Now defined *after* t exists
  const TABS = [
    { path: "hair", label: t("tabs.hair") },
    { path: "massage", label: t("tabs.massage") },
    { path: "beauty", label: t("tabs.beauty") },
  ];

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

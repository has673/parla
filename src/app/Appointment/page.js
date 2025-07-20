"use client";
import React, { useState } from "react";
import AppointmentTab from "../../../Components/AppointmentTab";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import { useLanguage } from "@/Context/LanguageContext";

// Define your tabs and their labels

const HomeScreen = () => {
  const { t } = useLanguage();
  const TABS = [
    { path: "active", label: t("tabs.active") },
    { path: "waiting", label: t("tabs.waiting") },
    { path: "history", label: t("tabs.history") },
  ];

  const [activeTab, setActiveTab] = useState("active"); // default

  return (
    <div>
      <HeaderTab
        links={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Appointments"
      />
      <div className="flex">
        <Sidebar />

        <div className="min-h-screen w-full p-4">
          {activeTab === "active" && <AppointmentTab type="confirmed" />}
          {activeTab === "waiting" && <AppointmentTab type="pending" />}
          {activeTab === "history" && <AppointmentTab type="completed" />}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

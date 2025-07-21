"use client";

import React, { useState, useMemo } from "react";
import HeaderTab from "../../../Components/Layout/HeaderTab";
import Sidebar from "../../../Components/Layout/Sidebar";
import { TabContext } from "@/Context/TabContext";
import { useLanguage } from "@/Context/LanguageContext";

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("hair");

  const { t } = useLanguage();
  const TABS = useMemo(
    () => [
      { path: "hair", label: t("tabs.hair") },
      { path: "massage", label: t("tabs.massage") },
      { path: "beauty", label: t("tabs.beauty") },
    ],
    [t]
  );

  return (
    <TabContext.Provider value={activeTab}>
      <div>
        <HeaderTab
          links={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title={t("choose")}
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

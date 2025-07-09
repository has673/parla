"use client";

import { createContext, useContext } from "react";

export const TabContext = createContext(null);

export const useTab = () => useContext(TabContext);

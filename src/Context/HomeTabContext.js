"use client";

import { createContext, useContext } from "react";

export const HomeTabContext = createContext(null);

export const useHomeTab = () => useContext(TabContext);

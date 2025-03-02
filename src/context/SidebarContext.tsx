// SidebarContext.tsx
"use client";

import { SidebarContextType } from "@/interfaces/Interfaces";
import React, { createContext, useContext, useState, ReactNode } from "react";

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isBarOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider
      value={{ isBarOpen, toggleSidebar, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

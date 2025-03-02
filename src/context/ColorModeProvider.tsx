"use client";
import { ColorModeType } from "@/interfaces/Interfaces";
import { createContext, useState, useContext, ReactNode } from "react";

const ColorModeContext = createContext<ColorModeType | undefined>(undefined);

// Context プロバイダ
export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMode, setSelectedMode] = useState<string>("transformer");
  return (
    <ColorModeContext.Provider value={{ selectedMode, setSelectedMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

// `useColorPalette` カスタムフック
export const useColorMode = (): ColorModeType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

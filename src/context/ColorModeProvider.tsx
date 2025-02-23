"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// 型定義
interface ColorModeType {
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
}

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

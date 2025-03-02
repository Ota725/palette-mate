"use client";
import { ColorPaletteContextType } from "@/interfaces/Interfaces";
import { createContext, useState, useContext } from "react";

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(
  undefined
);

// Context プロバイダ
export const ColorPaletteProvider = ({
  children,
  initialPalettes,
}: {
  children: React.ReactNode;
  initialPalettes: string[][];
}) => {
  const defaultPalettes = [
    ["#ffffff", "#ffffff", "#ffffff"], // 3色すべて白
  ];
  const [palettes, setPalettes] = useState<string[][]>(
    initialPalettes || defaultPalettes
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPalette, setCurrentPalette] = useState<string[]>(
    initialPalettes[0] || defaultPalettes[0]
  );
  const [isLockedList, setIsLockedList] = useState<boolean[]>(
    Array(initialPalettes[0].length).fill(false) // 🔹 初期値を `initialPalettes[0].length` に合わせる
  );

  return (
    <ColorPaletteContext.Provider
      value={{
        palettes,
        setPalettes,
        currentIndex,
        setCurrentIndex,
        currentPalette,
        setCurrentPalette,
        isLockedList,
        setIsLockedList,
      }}
    >
      {children}
    </ColorPaletteContext.Provider>
  );
};

// `useColorPalette` カスタムフック
export const useColorPalette = () => {
  const context = useContext(ColorPaletteContext);
  if (!context) {
    throw new Error(
      "useColorPalette must be used within a ColorPaletteProvider"
    );
  }
  return context;
};

"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// 型定義
interface ColorPaletteContextType {
  palettes: string[][];
  setPalettes: Dispatch<SetStateAction<string[][]>>;
  currentPalette: string[];
  setCurrentPalette: Dispatch<SetStateAction<string[]>>;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(
  undefined
);

// Context プロバイダ
export const ColorPaletteProvider = ({ children }: { children: ReactNode }) => {
  const [palettes, setPalettes] = useState<string[][]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);

  return (
    <ColorPaletteContext.Provider
      value={{
        palettes,
        setPalettes,
        currentIndex,
        setCurrentIndex,
        currentPalette,
        setCurrentPalette,
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

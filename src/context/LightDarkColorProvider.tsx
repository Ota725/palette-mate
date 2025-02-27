"use client";
import { createContext, useContext, useMemo } from "react";
import { useColorPalette } from "./ColorPaletteContext";

const LightDarkColorContext = createContext<{
  lightest: string;
  darkest: string;
}>({
  lightest: "#ffffff",
  darkest: "#000000",
});

export const LightDarkColorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentPalette } = useColorPalette();

  // パレット変更時のみ最小限の計算を行う
  const { lightest, darkest } = useMemo(() => {
    if (currentPalette.length === 0) {
      return { lightest: "#ffffff", darkest: "#000000" };
    }
    const sortedPalette = [...currentPalette].sort(
      (a, b) =>
        parseInt(a.replace("#", ""), 16) - parseInt(b.replace("#", ""), 16)
    );
    return {
      lightest: sortedPalette[sortedPalette.length - 1],
      darkest: sortedPalette[0],
    };
  }, [currentPalette]);

  return (
    <LightDarkColorContext.Provider value={{ lightest, darkest }}>
      {children}
    </LightDarkColorContext.Provider>
  );
};

export const useLightDarkColor = () => useContext(LightDarkColorContext);

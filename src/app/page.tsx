"use client";
import ColorBlock from "@/components/ColorBlock";
import ControlPanel from "@/components/ControlPanel";
import Header from "@/components/Header";
// import PaletteHistory from "@/components/PaletteHistory";
import { Color, HarmonyType } from "@/interfaces/Interfaces";
import { useEffect, useState } from "react";

const Home = () => {
  const [colors, setColors] = useState<Color[]>([
    { hex: "#E0316E", locked: false },
    { hex: "#31BDE0", locked: false },
    { hex: "#E0D131", locked: false },
    { hex: "#458E4E", locked: false },
    { hex: "#614934", locked: false },
  ]);
  const [colorCount, setColorCount] = useState<number>(5);
  const [harmonyType, setHarmonyType] = useState<HarmonyType>("complementary");
  // const [history, setHistory] = useState<string[][]>([]);

  useEffect(() => {
    generateNewPalette();
  }, []);

  const generateNewPalette = () => {
    // ハーモニータイプに基づく新しいカラー生成のロジックをここに追加
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  const toggleLock = (index: number) => {
    setColors((prev) =>
      prev.map((color, i) =>
        i === index ? { ...color, locked: !color.locked } : color
      )
    );
  };

  return (
    <div className="font-zenkaku text-lg">
      <Header />
      <ColorBlock
        colors={colors}
        copyToClipboard={copyToClipboard}
        toggleLock={toggleLock}
      />
      <ControlPanel
        colorCount={colorCount}
        setColorCount={setColorCount}
        harmonyType={harmonyType}
        setHarmonyType={setHarmonyType}
        generateNewPalette={generateNewPalette}
      />
      {/* <PaletteHistory history={history} /> */}
    </div>
  );
};

export default Home;

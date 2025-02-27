"use client";

import { useColorPalette } from "@/context/ColorPaletteContext";
import { getLightestAndDarkestColors } from "@/utils/getLightestAndDarkestColors";
import { getTextColor } from "@/utils/getTextColor";

// 背景を10%暗くする
const darkenHexColor = (hex: string, percentage: number): string => {
  // HEXコードが正しい形式か確認
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error("Invalid HEX color format. Expected format: #RRGGBB");
  }

  // RGBに分割
  const [r, g, b] = hex
    .slice(1) // "#" を除去
    .match(/\w\w/g)!
    .map((x) => Math.max(0, Math.round(parseInt(x, 16) * (1 - percentage))));

  // 2桁のHEX形式に変換
  const toHex = (value: number) => value.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const ColorPalettes = () => {
  const { currentPalette } = useColorPalette();
  const paletteBackground = darkenHexColor(currentPalette[0], 0.1);
  const { lightestColor, darkestColor } =
    getLightestAndDarkestColors(currentPalette);

  return (
    <div
      className="h-auto py-3"
      style={{
        backgroundColor: paletteBackground,
      }}
    >
      <div
        className={`h-auto py-3 gap-4 flex flex-wrap justify-center items-center`}
      >
        {currentPalette.map((color, index) => {
          return (
            <div
              key={index}
              className={`w-56 h-56 pl-3 shadow-lg pt-48 font-semibold`}
              style={{
                backgroundColor: color,
                color: getTextColor(color, lightestColor, darkestColor),
              }}
            >
              {color}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPalettes;

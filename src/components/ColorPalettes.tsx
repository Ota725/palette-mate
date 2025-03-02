"use client";

import { useColorPalette } from "@/context/ColorPaletteContext";
import {
  darkenHexColor,
  getLightestAndDarkestColors,
  getTextColor,
} from "@/utils/colorUtils";

const ColorPalettes = () => {
  const { currentPalette } = useColorPalette();
  const paletteBackground = darkenHexColor(currentPalette[0], 0.1);
  const { lightestColor, darkestColor } =
    getLightestAndDarkestColors(currentPalette); // 背景の色に応じてcurrentPaletteの中から明るい色と暗い色を取得

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

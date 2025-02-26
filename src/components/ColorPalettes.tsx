"use client";

import { useColorPalette } from "@/context/ColorPaletteContext";

const ColorPalettes = () => {
  const { currentPalette } = useColorPalette();

  return (
    <div
      className="h-auto py-3"
      style={{
        backgroundColor: `${currentPalette[0]}`,
      }}
    >
      <div className={`h-auto py-3 gap-4 flex justify-center items-center`}>
        {currentPalette.map((color, index) => {
          // テキストの色
          const nextColor = currentPalette[(index + 1) % currentPalette.length];
          return (
            <div
              key={index}
              className={`w-56 h-56 pl-3 shadow-lg pt-48 font-semibold`}
              style={{
                backgroundColor: color,
                color: nextColor,
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

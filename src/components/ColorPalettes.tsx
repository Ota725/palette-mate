"use client";

import { useColorPalette } from "@/context/ColorPaletteContext";

const ColorPalettes = () => {
  const { currentIndex, currentPalette } = useColorPalette();
  return (
    <div
      className="h-auto py-3"
      style={{
        backgroundColor: `${currentPalette[currentIndex]}`,
      }}
    >
      <div className={`h-auto py-3 gap-4 flex justify-center items-center`}>
        {currentPalette.map((color, index) => {
          // テキストの色
          const nextColor = currentPalette[(index + 1) % currentPalette.length];
          return (
            <div
              key={index}
              className={`w-56 h-56 shadow-lg pl-3 pt-48 font-semibold`}
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

// HeaderPalette.tsx
"use client";

import { useEffect } from "react";
import { useColorPalette } from "@/context/ColorPaletteContext";
import ColorPicker from "./ColorPicker";

const HeaderPalette = () => {
  const { currentPalette, setCurrentPalette, isLockedList, setIsLockedList } =
    useColorPalette();

  // // isLockedList の初期化
  useEffect(() => {
    if (currentPalette.length > 0 && isLockedList.length === 0) {
      setIsLockedList(new Array(currentPalette.length).fill(false));
    }
  }, [currentPalette, isLockedList, setIsLockedList]);

  const toggleLock = (index: number) => {
    setIsLockedList(
      isLockedList.map((isLocked, i) => (i === index ? !isLocked : isLocked))
    );
  };
  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isLockedList[index]) return; // ロックされている場合は変更不可
    const newColors = [...currentPalette];
    newColors[index] = e.target.value;
    setCurrentPalette(newColors);
  };

  return (
    <div className="flex justify-center gap-x-4">
      {currentPalette.map((color, index) => (
        <ColorPicker
          key={index}
          color={color}
          isLocked={isLockedList[index]}
          toggleLock={() => toggleLock(index)}
          handleColorChange={(e) => handleColorChange(e, index)}
        />
      ))}
    </div>
  );
};

export default HeaderPalette;

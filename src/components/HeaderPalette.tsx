"use client";

import { useEffect, useState } from "react";
import { useColorPalette } from "@/context/ColorPaletteContext";
import { useLockedColors } from "@/context/LockedColorsContext";
import ColorPicker from "./ColorPicker";

const HeaderPalette = ({
  initialPalettes,
}: {
  initialPalettes: string[][];
}) => {
  const { palettes, setPalettes, currentPalette, setCurrentPalette } =
    useColorPalette();
  const { isLockedList, setIsLockedList } = useLockedColors();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  useEffect(() => {
    if (palettes.length === 0) {
      setPalettes(initialPalettes);
      setCurrentPalette(initialPalettes[0] || []);
    }
  }, [initialPalettes, palettes, setPalettes, setCurrentPalette]);

  // isLockedList の初期化
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

  useEffect(() => {
    console.log("isLockedList:", isLockedList);
  }, [isLockedList]);

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
    <div className="flex justify-center gap-4 mr-4 my-4">
      {currentPalette.map((color, index) => (
        <ColorPicker
          key={index}
          color={color}
          isLocked={isLockedList[index]}
          toggleLock={() => toggleLock(index)}
          handleColorChange={(e) => handleColorChange(e, index)}
          copiedColor={copiedColor}
          setCopiedColor={setCopiedColor}
        />
      ))}
    </div>
  );
};

export default HeaderPalette;

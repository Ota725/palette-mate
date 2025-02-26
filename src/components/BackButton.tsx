"use client";

import { useColorPalette } from "@/context/ColorPaletteContext";
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  const { currentIndex, setCurrentIndex } = useColorPalette();

  const handleBack = () => {
    if (0 < currentIndex) {
      setCurrentIndex((prev) => prev - 1);
      console.log("currentIndex:", currentIndex);
    } else {
      return;
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mr-2 px-3 py-2.5 flex items-center bg-[#f9fafb] text-sm text-zinc-500 rounded-md border border-zinc-400 transition  "
    >
      <FaArrowLeft />
    </button>
  );
};

export default BackButton;

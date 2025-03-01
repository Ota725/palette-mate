"use client";

// import { useColorPalette } from "@/context/ColorPaletteContext";
import { IoBookmarkOutline } from "react-icons/io5";

const FavoriteButton = () => {
  // const { currentIndex, setCurrentIndex } = useColorPalette();

  const handleBack = () => {
    // if (0 < currentIndex) {
    //   setCurrentIndex((prev) => prev - 1);
    //   console.log("currentIndex:", currentIndex);
    // } else {
    //   return;
    // }
  };

  return (
    <button
      onClick={handleBack}
      className="z-10 ml-3 mr-2 p-1 flex justify-center items-center cursor-pointer"
    >
      <IoBookmarkOutline size={20} />
    </button>
  );
};

export default FavoriteButton;

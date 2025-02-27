"use client";
import SVGContainer from "@/components/SVGContainer";
import ColorPalettes from "./ColorPalettes";
import { useMediaQueryContext } from "@/components/layouts/MediaQueryContext";

// src/app/brand/[count]
const ThemePreview = () => {
  const { isMdUp, isSmUp } = useMediaQueryContext();

  return (
    <div
      className="mt-[57px] flex-grow"
      style={{
        marginLeft: isMdUp ? "224px" : "0px",
        marginTop: isSmUp ? "101px" : "57px",
      }}
    >
      <SVGContainer />
      <ColorPalettes />
    </div>
  );
};

export default ThemePreview;

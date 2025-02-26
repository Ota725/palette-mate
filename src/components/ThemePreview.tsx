"use client";
import SVGContainer from "@/components/SVGContainer";
import ColorPalettes from "./ColorPalettes";
import { useMediaQuery, useTheme } from "@mui/material";

// src/app/brand/[count]
const ThemePreview = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      className="mt-[57px] flex-grow"
      style={{ marginLeft: isMdUp ? "224px" : "0px" }}
    >
      <SVGContainer />
      <ColorPalettes />
    </div>
  );
};

export default ThemePreview;

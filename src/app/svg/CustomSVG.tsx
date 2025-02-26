"use client"; // ReactのuseStateを使うのでclient componentにする

import { useColorPalette } from "@/context/ColorPaletteContext";
import { getPathsData } from "@/data/pathsData";
import React, { useEffect, useState } from "react";

interface PathData {
  d: string;
  colorIndexes: number;
}
const CustomSVG = () => {
  const { currentPalette } = useColorPalette();
  const [paths, setPaths] = useState<PathData[]>([]);

  useEffect(() => {
    if (currentPalette.length > 0) {
      const paletteCountIndex = Math.max(currentPalette.length - 2, 0);
      // console.log("paletteCount:", paletteCountIndex);
      const newPaths = getPathsData(paletteCountIndex) ?? []; // nullやundefinedを防ぐ
      setPaths(newPaths);
      // console.log("newPaths before set:", newPaths);
    }
  }, [currentPalette]);

  // useEffect(() => {
  //   console.log("Updated paths:", paths);
  // }, [paths]); // paths が変更されたタイミングでログを出す

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1215 683" // 隙間をなくすために縦を1少なく
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_259)">
        <rect width="1215" height="684" fill={currentPalette[0]} />
        {paths.map(({ d, colorIndexes }, index) => (
          <path
            key={index}
            d={d}
            fill={currentPalette[colorIndexes] || "#B5BABB"}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_39_259">
          <rect width="1215" height="684" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CustomSVG;

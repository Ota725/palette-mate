// app/providers/ColorProvider.tsx (Server Component)
"use server";
import React from "react";
import { generateColorPalettes } from "@/app/actions/generateColorPalettes";
import { defaultPalettes, PaletteConfig } from "@/data/paletteConfigs";
import { ColorPaletteRequest } from "@/interfaces/Interfaces";
import { ColorPaletteProvider } from "@/context/ColorPaletteContext";

const DataFetchProvider = async ({
  params,
  children,
}: {
  params: Promise<{ count: string }>;
  children: React.ReactNode;
}) => {
  const { count } = (await params) ?? "2";
  // console.log("count:", count);

  const modeData: PaletteConfig =
    defaultPalettes[count] ?? defaultPalettes["2"];

  const jsonData: ColorPaletteRequest = {
    mode: "transformer",
    num_colors: modeData.num_colors,
    temperature: "1.2",
    num_results: 10,
    adjacency: modeData.adjacency,
    palette: modeData.palette,
  };
  const colors = await generateColorPalettes([], jsonData);

  return (
    <ColorPaletteProvider initialPalettes={colors}>
      {children}
    </ColorPaletteProvider>
  );
};
export default DataFetchProvider;

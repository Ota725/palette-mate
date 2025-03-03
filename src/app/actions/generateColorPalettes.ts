"use server";

import {
  ColorPaletteRequest,
  ColorPaletteResponse,
  Palette,
} from "@/interfaces/Interfaces";

// APIからカラーパレットを取得
export const fetchColorPalettes = async (
  _prevState: string[][],
  jsonData: ColorPaletteRequest
): Promise<Palette[]> => {
  try {
    const response = await fetch("https://api.huemint.com/color", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch color palettes");
    }

    const data: ColorPaletteResponse = await response.json();

    return data.results.map((result) => result.palette);
  } catch (error) {
    console.error("Error fetching color palettes:", error);
    return [];
  }
};

"use server";

import { ColorPaletteRequest } from "@/interfaces/Interfaces";
import { fetchColorPalettes } from "@/utils/fetchColorPalettes";

// 型を適切に指定して、Server Actions が非同期で正しいデータを返す
export const generateColorPalettes = async (
  _prevState: string[][],
  jsonData: ColorPaletteRequest
): Promise<string[][]> => {
  try {
    const palettes = await fetchColorPalettes(jsonData);
    return palettes; // string[][] 型を返す
  } catch (error) {
    console.error("Error in generateColorPalettes action:", error);
    return []; // エラー時に空配列を返す
  }
};

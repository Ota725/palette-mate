// src/app/api/color-palette/route.ts
import { ColorPaletteRequest } from "@/interfaces/Interfaces";
import { NextResponse } from "next/server";

// **型定義**
interface ColorPaletteResponse {
  results: string[][];
}

// **APIリクエスト処理関数**
export const fetchColorPalettes = async (
  json_data: ColorPaletteRequest
): Promise<string[][] | null> => {
  try {
    const response = await fetch("https://api.huemint.com/color", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json_data),
    });

    if (!response.ok) {
      console.error("API request failed with status:", response.status);
      return null;
    }

    const data: ColorPaletteResponse = await response.json();

    // 成功時にresultsを返す
    if (data.results && Array.isArray(data.results)) {
      return data.results;
    } else {
      console.error("Invalid response format:", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching color palettes:", error);
    return null;
  }
};

// **POSTメソッドの処理**
export async function POST() {
  const json_data: ColorPaletteRequest = {
    mode: "random",
    num_colors: 3,
    temperature: "1.2",
    num_results: 5,
    adjacency: ["0", "10", "20", "10", "0", "30", "20", "30", "0"],
    palette: ["#ffffff", "-", "-"],
  };

  const data = await fetchColorPalettes(json_data);

  if (data) {
    return NextResponse.json(data); // 成功時、カラーパレットを返す
  } else {
    return NextResponse.error(); // エラー時、エラーレスポンス
  }
}

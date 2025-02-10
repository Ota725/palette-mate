"use client"; // クライアントサイドで動作させるために指定

import { useEffect, useState } from "react";

// **型定義**
type Palette = string[];

interface HuemintResult {
  palette: Palette;
}

interface HuemintResponse {
  results: HuemintResult[];
}

// **APIから配色を取得**
const fetchColorPalettes = async (): Promise<Palette[]> => {
  const json_data = {
    mode: "random",
    num_colors: 3,
    temperature: "1.2",
    num_results: 5,
    adjacency: ["0", "10", "20", "10", "0", "30", "20", "30", "0"],
    palette: ["#ffffff", "-", "-"],
  };

  try {
    const response = await fetch("https://api.huemint.com/color", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json_data),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API Error:", response.statusText);
      return [];
    }

    const data: HuemintResponse = await response.json();
    if (data.results && Array.isArray(data.results)) {
      return data.results.map((result) => result.palette);
    } else {
      console.error("Invalid API response format");
      return [];
    }
  } catch (error) {
    console.error("Error fetching color palettes:", error);
    return [];
  }
};

// **カラーパレット表示コンポーネント**
const ColorPaletteGenerator = () => {
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 初回データ取得
  useEffect(() => {
    loadPalettes();
  }, []);

  // APIから新しい配色セットを取得する
  const loadPalettes = async () => {
    setLoading(true);
    setError(null);

    const newPalettes = await fetchColorPalettes(); // **await を忘れずに！**

    if (newPalettes.length > 0) {
      setPalettes(newPalettes);
      setCurrentIndex(0);
    } else {
      setError("Failed to fetch color palettes");
    }

    setLoading(false);
  };

  // 「次へ」ボタンの処理
  const showNextPalette = () => {
    if (currentIndex < palettes.length - 1) {
      setCurrentIndex((prev) => prev + 1); // **関数型更新**
    } else {
      loadPalettes();
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (palettes.length === 0) return <div>No palettes available</div>;

  return (
    <div>
      <h1>Generated Color Palette</h1>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {palettes[currentIndex].map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "100px",
              height: "100px",
              margin: "5px",
              border: "1px solid black",
            }}
          ></div>
        ))}
      </div>
      <button
        onClick={showNextPalette}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        次へ →
      </button>
    </div>
  );
};

export default ColorPaletteGenerator;

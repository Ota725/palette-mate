// app/config/defaultPalettes.ts
import { PaletteConfig } from "@/interfaces/Interfaces";

// URLに応じてAPI用のjsonデータを設定
export const defaultPalettes: Record<string, PaletteConfig> = {
  "1": {
    num_colors: 2,
    adjacency: ["0", "75", "75", "0"],
    palette: ["-", "-"],
  },
  "2": {
    num_colors: 3,
    adjacency: ["0", "75", "55", "75", "0", "0", "55", "0", "0"],
    palette: ["-", "-", "-"],
  },
  "3": {
    num_colors: 4,
    adjacency: [
      "0",
      "75",
      "55",
      "35",
      "75",
      "0",
      "0",
      "0",
      "55",
      "0",
      "0",
      "0",
      "35",
      "0",
      "0",
      "0",
    ],
    palette: ["-", "-", "-", "-"],
  },
};

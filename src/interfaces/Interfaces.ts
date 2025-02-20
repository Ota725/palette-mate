export interface Color {
  hex: string;
  locked: boolean;
}

export type Palette = string[];
export type PaletteProps = Color[];

export interface ColorPalette {
  palette: Palette;
}

export interface ApiResponse {
  results: ColorPalette[];
}

export interface ColorPaletteResponse {
  results: ColorPalette[]; // 色の配列
}

export interface ColorPaletteRequest {
  mode: string;
  num_colors: number;
  temperature: string;
  num_results: number;
  adjacency: string[];
  palette: string[];
}

export interface PaletteColor {
  color: string;
  isLocked: boolean;
}

export interface Color {
  hex: string;
  locked: boolean;
}

export type HarmonyType =
  | "complementary"
  | "splitComplementary"
  | "analogous"
  | "triadic"
  | "tetradic"
  | "monochromatic";

export interface ColorPaletteRequest {
  mode: "transformer" | "diffusion" | "random";
  num_colors: number;
  temperature: string;
  num_results: number;
  adjacency: string[];
  palette: string[];
}

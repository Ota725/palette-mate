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

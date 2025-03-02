import { Dispatch, SetStateAction } from "react";

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

export interface supabasePalettesProps {
  id: string;
  colors: string[];
  created_at: string;
}

export interface SidebarContextType {
  isBarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface ColorPaletteContextType {
  palettes: string[][];
  setPalettes: Dispatch<SetStateAction<string[][]>>;
  currentPalette: string[];
  setCurrentPalette: Dispatch<SetStateAction<string[]>>;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  isLockedList: boolean[];
  setIsLockedList: Dispatch<SetStateAction<boolean[]>>;
}

export interface ColorModeType {
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
}

export interface MenuSectionProps {
  title: string;
  links: { href: string; label: string }[];
}

export interface PaletteConfig {
  num_colors: number;
  adjacency: string[];
  palette: string[];
}

export interface PathData {
  d: string;
  colorIndexes: number;
}

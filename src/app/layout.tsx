import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique, Viga } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { SidebarProvider } from "@/context/SidebarContext";
import { MediaQueryProvider } from "@/components/layouts/MediaQueryContext";
import { ColorPaletteProvider } from "@/context/ColorPaletteContext";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { LightDarkColorProvider } from "@/context/LightDarkColorProvider";
import { defaultPalettes } from "@/data/paletteConfigs";
import { generateColorPalettes } from "./actions/generateColorPalettes";
import { ColorPaletteRequest, PaletteConfig } from "@/interfaces/Interfaces";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ZenKakuGothicAntiqueFont = Zen_Kaku_Gothic_Antique({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ZenKakuGothicAntique",
  display: "swap",
});

const VigaFont = Viga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Viga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PaletteMate",
  description: "Generated by create next app",
};

const RootLayout = async ({
  params,
  children,
}: Readonly<{
  params: Promise<{ count: string }>;
  children: React.ReactNode;
}>) => {
  // URLをもとに配色数を決める
  const { count } = (await params) ?? "2";

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
    <html lang="ja">
      <body
        className={`${ZenKakuGothicAntiqueFont.variable} ${VigaFont.variable} bg-white text-black antialiased`}
      >
        <HeroUIProvider>
          <ColorPaletteProvider initialPalettes={colors}>
            <ColorModeProvider>
              <LightDarkColorProvider>
                <MediaQueryProvider>
                  <SidebarProvider>
                    {children}
                    <SpeedInsights />
                  </SidebarProvider>
                </MediaQueryProvider>
              </LightDarkColorProvider>
            </ColorModeProvider>
          </ColorPaletteProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
};
export default RootLayout;

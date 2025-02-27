// app/brand/[count]/page.tsx
import { generateColorPalettes } from "@/app/actions/generateColorPalettes";
import Header from "@/components/base/header/Header";
import Sidebar from "@/components/base/sidebar/Sidebar";
import ThemePreview from "@/components/ThemePreview";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { ColorPaletteProvider } from "@/context/ColorPaletteContext";
import { LightDarkColorProvider } from "@/context/LightDarkColorProvider";
import { MediaQueryProvider } from "@/components/layouts/MediaQueryContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { defaultPalettes, PaletteConfig } from "@/data/paletteConfigs";
import { ColorPaletteRequest } from "@/interfaces/Interfaces";

// TODO
// 保存機能

const BrandPage = async ({
  params,
}: {
  params: Promise<{ count: string }>;
}) => {
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
    <ColorPaletteProvider initialPalettes={colors}>
      <ColorModeProvider>
        <LightDarkColorProvider>
          <MediaQueryProvider>
            <SidebarProvider>
              <div className="w-full min-h-screen flex flex-row bg-gray-100">
                <Sidebar />
                <div className="w-full flex flex-col flex-grow">
                  <Header count={count} />
                  <ThemePreview />
                </div>
              </div>
            </SidebarProvider>
          </MediaQueryProvider>
        </LightDarkColorProvider>
      </ColorModeProvider>
    </ColorPaletteProvider>
  );
};

export default BrandPage;

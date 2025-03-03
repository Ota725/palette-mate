// app/brand/[count]/page.tsx
import { fetchColorPalettes } from "@/app/actions/fetchColorPalettes";
import Header from "@/components/base/header/Header";
import Sidebar from "@/components/base/sidebar/Sidebar";
import ThemePreview from "@/components/ThemePreview";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { ColorPaletteProvider } from "@/context/ColorPaletteContext";
import { LightDarkColorProvider } from "@/context/LightDarkColorProvider";
import { defaultPalettes } from "@/data/paletteConfigs";
import { ColorPaletteRequest, PaletteConfig } from "@/interfaces/Interfaces";

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
    num_results: 50,
    adjacency: modeData.adjacency,
    palette: modeData.palette,
  };

  const colors = await fetchColorPalettes([], jsonData);

  return (
    <ColorPaletteProvider initialPalettes={colors}>
      <LightDarkColorProvider>
        <ColorModeProvider>
          <div className="w-full min-h-screen flex flex-row bg-gray-100">
            <Sidebar />
            <div className="w-full flex flex-col flex-grow">
              <Header count={count} />
              <ThemePreview />
            </div>
          </div>
        </ColorModeProvider>
      </LightDarkColorProvider>
    </ColorPaletteProvider>
  );
};

export default BrandPage;

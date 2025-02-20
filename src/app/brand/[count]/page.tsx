// app/brand/[count]/page.tsx
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ThemePreview from "@/components/ThemePreview";
import { ColorPaletteRequest } from "@/interfaces/Interfaces";
import { generateColorPalettes } from "@/app/actions/generateColorPalettes";
import { defaultPalettes, PaletteConfig } from "@/data/paletteConfigs";

const BrandPage = async ({
  params,
}: {
  params: Promise<{ count: string }>;
}) => {
  const count = (await params).count ?? "2";
  console.log("count:", count);

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

  const palettes = await generateColorPalettes([], jsonData);
  console.log(palettes);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <Header initialPalettes={palettes} count={count} />
      {/* サイドメニュー */}
      <Sidebar />
      {/* ブランドページの場合のみ特定のデザインを表示 */}
      <ThemePreview />
    </div>
  );
};

export default BrandPage;

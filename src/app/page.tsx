import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ThemePreview from "./brand/[count]/page";

// src/app/page.tsx (トップページ)
const HomePage = async ({ params }: { params: Promise<{ count: string }> }) => {
  const count = "2";

  const defaultPalettes = [
    ["#ffffff", "#ffffff", "#ffffff"], // 3色すべて白
  ];

  console.log("app/page.tsx");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <Header initialPalettes={defaultPalettes} count={count} />
      {/* サイドメニュー */}
      <Sidebar />
    </div>
  );
};
export default HomePage;

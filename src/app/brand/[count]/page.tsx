// app/brand/[count]/page.tsx
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ThemePreview from "@/components/ThemePreview";

const BrandPage = async ({
  params,
}: {
  params: Promise<{ count: string }>;
}) => {
  const count = (await params).count ?? "2";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <Header count={count} />
      {/* サイドメニュー */}
      <Sidebar />
      {/* ブランドページの場合のみ特定のデザインを表示 */}
      <ThemePreview />
    </div>
  );
};

export default BrandPage;

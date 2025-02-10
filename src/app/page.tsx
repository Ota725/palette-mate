import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// src/app/page.tsx (トップページ)
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <Header />
      <Sidebar />
    </div>
  );
}

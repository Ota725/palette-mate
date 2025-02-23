import Sidebar from "@/components/Sidebar";

// src/app/page.tsx (トップページ)
const HomePage = async () => {
  // const count = "2";

  // const defaultPalettes = [
  //   ["#ffffff", "#ffffff", "#ffffff"], // 3色すべて白
  // ];

  console.log("app/page.tsx");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      {/* <Header count={count} /> */}
      {/* サイドメニュー */}
      <Sidebar />
    </div>
  );
};
export default HomePage;

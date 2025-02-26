import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

// src/app/page.tsx (トップページ)
const HomePage = async () => {
  const count = "2";

  return (
    <div className="w-full min-h-screen flex flex-row bg-gray-100">
      <Sidebar />
      <div className="w-full flex flex-col flex-grow">
        <Header count={count} />
      </div>
    </div>
  );
};
export default HomePage;

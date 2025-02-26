import Header from "@/components/Header";
import Switcher from "@/components/layouts/Switcher";
import Sidebar from "@/components/Sidebar";

// src/app/page.tsx (トップページ)
const HomePage = async () => {
  const count = "2";

  return (
    <div className="min-h-screen bg-gray-100">
      <Switcher pc={<Sidebar />} />
      <div className="w-full flex flex-col flex-grow">
        <Header count={count} />
      </div>
    </div>
  );
};
export default HomePage;

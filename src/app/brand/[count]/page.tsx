// app/brand/[count]/page.tsx
import Header from "@/components/Header";
import Switcher from "@/components/layouts/Switcher";
import Sidebar from "@/components/Sidebar";
import ThemePreview from "@/components/ThemePreview";

const BrandPage = async ({
  params,
}: {
  params: Promise<{ count: string }>;
}) => {
  const { count } = (await params) ?? "2";

  return (
    <div className="w-full min-h-screen flex flex-row bg-gray-100">
      <Switcher pc={<Sidebar />} />
      <div className="w-full flex flex-col flex-grow">
        <Header count={count} />
        <ThemePreview />
      </div>
    </div>
  );
};

export default BrandPage;

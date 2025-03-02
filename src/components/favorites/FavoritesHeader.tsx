import SidebarOpenButton from "@/components/base/header/SidebarOpenButton";

const FavoritesHeader = async () => {
  return (
    <header className="fixed w-full h-14 px-4 py-2 z-10 flex justify-start items-center bg-gray-50 text-black border-b">
      <SidebarOpenButton />
    </header>
  );
};

export default FavoritesHeader;

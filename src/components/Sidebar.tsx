"use client";
import { useSidebar } from "@/context/SidebarContext";
import MenuSection from "./MenuSection";
import SidebarCloseButton from "./SidebarCloseButton";
import Switcher from "./layouts/Switcher";
import { useMediaQueryContext } from "@/context/MediaQueryContext";

const Sidebar = () => {
  const { isBarOpen, closeSidebar } = useSidebar();
  const { isMdUp } = useMediaQueryContext();
  return (
    <>
      {/* md未満の場合のみオーバーレイ（クリックで閉じる）を表示 */}
      {isBarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`transition fixed top-0 left-0 z-50 w-56 min-h-screen flex-grow bg-gray-50 border-r ${
          isMdUp
            ? "translate-x-0"
            : isBarOpen
            ? "translate-x-0"
            : "-translate-x-56"
        }`}
        style={{}}
      >
        {/* md以上・istrue =  */}
        <div className="py-4 px-2 flex justify-between items-center">
          <h1 className="text-2xl font-viga">PaletteMate</h1>
          <Switcher sp={<SidebarCloseButton />} />
        </div>
        {/* Brand メニュー */}
        <MenuSection
          title="Brand"
          links={[
            { href: "/brand/1", label: "1 Color" },
            { href: "/brand/2", label: "2 Colors" },
            { href: "/brand/3", label: "3 Colors" },
          ]}
        />
        {/* Website メニュー */}
        <MenuSection
          title="Website"
          links={[
            { href: "/website/1", label: "1 Accent" },
            { href: "/website/2", label: "2 Accents" },
            { href: "/website/3", label: "3 Accents" },
          ]}
        />
      </div>
    </>
  );
};

export default Sidebar;

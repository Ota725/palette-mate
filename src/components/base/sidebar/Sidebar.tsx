"use client";
import { useSidebar } from "@/context/SidebarContext";
import MenuSection from "./MenuSection";
import SidebarCloseButton from "./SidebarCloseButton";
import Switcher from "../../layouts/Switcher";
import { useMediaQueryContext } from "@/components/layouts/MediaQueryContext";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const Sidebar = () => {
  const { isBarOpen, closeSidebar } = useSidebar();
  const { isMdUp } = useMediaQueryContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <div className="py-4 px-3 flex justify-between items-center">
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
        {/* お気に入りページ */}
        <Link
          href="/favorites"
          className="text-sm font-semibold flex justify-between items-center cursor-pointer h-14 py-4 px-3 text-gray-500 hover:text-gray-900 transition"
        >
          Saved Palettes
          <span className="w-4 h-4 transform">
            <MdFavoriteBorder />
          </span>
        </Link>
        {/* ログアウトボタン（クリックでモーダル表示） */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full text-sm font-semibold flex justify-between items-center cursor-pointer h-14 py-4 px-3 text-gray-500 hover:text-gray-900 transition"
        >
          Log Out
          <IoLogOutOutline />
        </button>
      </div>
      {/* ログアウト確認モーダル */}
      <LogoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Sidebar;

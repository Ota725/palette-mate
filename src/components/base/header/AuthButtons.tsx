"use client";
import { useMediaQueryContext } from "@/components/layouts/MediaQueryContext";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";

const AuthButtons = () => {
  const { isSmUp } = useMediaQueryContext();
  return (
    <div className="flex justify-center items-center">
      <Link
        href="/login"
        className={`ml-3 ${
          isSmUp
            ? "p-1 text-xs"
            : "ml-6 px-4 py-2 border box-border border-gray-600 rounded-md"
        }`}
      >
        {/* スマートフォンサイズのとき、アイコンを使って小スペース化 */}
        {isSmUp && <IoLogInOutline size={20} className="ml-0.5" />}
        Login
      </Link>
    </div>
  );
};

export default AuthButtons;

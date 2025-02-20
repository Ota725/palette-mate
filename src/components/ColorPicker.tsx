"use client";

import { LuCopy } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";

// 関数をコンポーネント外に切り出し
const getTextColor = (hex: string) =>
  parseInt(hex.replace("#", "").slice(0, 6), 16) > 0xffffff / 2
    ? "text-black"
    : "text-white";

// コピー処理を小さな関数に分ける
const copyToClipboard = async (
  color: string,
  setCopiedColor: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1500);
  } catch (error) {
    console.error("Clipboard copy failed:", error);
  }
};

const ColorPicker = ({
  color,
  isLocked,
  toggleLock,
  handleColorChange,
  setCopiedColor,
}: {
  color: string;
  isLocked: boolean;
  toggleLock: () => void;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  copiedColor: string | null;
  setCopiedColor: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <div
          className="w-10 h-10 z-10 flex justify-center items-center rounded-full shadow-gray-300 shadow-md hover:shadow-lg hover:shadow-gray-300 cursor-pointer relative"
          style={{ backgroundColor: color }}
        >
          {isLocked && (
            <IoMdLock size={16} className={`${getTextColor(color)}`} />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white border shadow-lg rounded-lg w-40">
        <div className="flex flex-col gap-2">
          <button
            className="px-3 py-1 gap-x-3 flex justify-start items-center hover:bg-zinc-100"
            onClick={toggleLock}
          >
            <IoMdLock size={14} />
            {isLocked ? "Unlock" : "Lock"}
          </button>
          <button
            className="px-3 py-1 gap-x-3 flex justify-start items-center hover:bg-zinc-100"
            onClick={() => copyToClipboard(color, setCopiedColor)}
          >
            <LuCopy size={14} />
            Copy Code
          </button>
          <input
            type="color"
            className="w-12 text-base font-base border border-gray-300 bg-transparent rounded-sm"
            value={color}
            onChange={handleColorChange}
            disabled={isLocked} // ロックされている場合は変更不可
          />
          <input
            type="text"
            className="w-36 px-3 py-2 text-base font-base border"
            value={color}
            onChange={handleColorChange}
            disabled={isLocked} // ロックされている場合は変更不可
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ColorPicker;

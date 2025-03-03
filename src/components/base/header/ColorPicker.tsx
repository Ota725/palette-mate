"use client";

import { LuCopy } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { useLightDarkColor } from "@/context/LightDarkColorProvider";
import { copyToClipboard } from "@/utils/colorUtils";
import { useState, useRef } from "react";

const ColorPicker = ({
  color,
  isLocked,
  toggleLock,
  handleColorChange,
}: {
  color: string;
  isLocked: boolean;
  toggleLock: () => void;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { lightest, darkest } = useLightDarkColor();
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const timerRefsMap = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const uniqueKey = `color-${color}`;

  // IoMdLock の色を現在の背景色に応じて変更
  const lockColor =
    parseInt(color.replace("#", ""), 16) > 0xffffff / 2 ? darkest : lightest;

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <div
          className="w-10 h-10 z-10 flex justify-center items-center rounded-full shadow-gray-300 shadow-md hover:shadow-lg hover:shadow-gray-300 cursor-pointer relative"
          style={{ backgroundColor: color }}
        >
          {isLocked && <IoMdLock size={16} style={{ color: lockColor }} />}
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
            onClick={() =>
              copyToClipboard(color, setCopiedStates, uniqueKey, timerRefsMap)
            }
          >
            <LuCopy size={14} />
            {copiedStates[uniqueKey] ? "Copied" : "Copy Code"}
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

"use client";
import { getLightestAndDarkestColors, getTextColor } from "@/utils/colorUtils";
import { IoTrashOutline } from "react-icons/io5";
import { useState } from "react";
import { deleteFavoritePalette } from "@/app/actions/favoriteColors";
import { useRouter } from "next/navigation";

interface FavoritePaletteItemProps {
  paletteId: string;
  colors: string[];
  activeColors: { paletteId: string; colorIndex: number } | null;
  copiedStates: { [key: string]: boolean };
  handleTap: (paletteId: string, colorIndex: number, color: string) => void;
  handleMouseEnter: (paletteId: string, colorIndex: number) => void;
  handleMouseLeave: () => void;
}

const FavoritePaletteItem = ({
  paletteId,
  colors,
  activeColors,
  copiedStates,
  handleTap,
  handleMouseEnter,
  handleMouseLeave,
}: FavoritePaletteItemProps) => {
  const { lightestColor, darkestColor } = getLightestAndDarkestColors(colors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const success = await deleteFavoritePalette(paletteId);
    if (success) {
      router.refresh(); // 削除を反映
    }
  };

  return (
    <div className="flex flex-col items-center">
      <li className="w-72 h-24 flex rounded-lg border overflow-hidden">
        {colors.map((color, index) => {
          const uniqueKey = `${paletteId}-${index}`;
          const isActive =
            activeColors?.paletteId === paletteId &&
            activeColors.colorIndex === index;
          const isCopied = copiedStates[uniqueKey];

          return (
            <div
              key={color}
              className={`relative transition-all duration-200 ease-in-out flex items-center justify-center ${
                isActive ? "flex-grow-[2]" : "flex-1"
              } h-full cursor-pointer`}
              style={{ backgroundColor: color }}
              onClick={() => handleTap(paletteId, index, color)}
              onMouseEnter={() => handleMouseEnter(paletteId, index)}
              onMouseLeave={handleMouseLeave}
            >
              {(isActive || isCopied) && (
                <div
                  className="absolute inset-0 flex items-center justify-center text-center font-mono"
                  style={{
                    color: getTextColor(color, lightestColor, darkestColor),
                  }}
                >
                  {isCopied ? <span>Copied!</span> : <span>{color}</span>}
                </div>
              )}
            </div>
          );
        })}
      </li>
      <div className="w-full flex justify-end mt-1 mr-1">
        <button
          className="text-black p-1 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <IoTrashOutline size={20} />
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded font-semibold shadow-md">
            <h2 className="font-semibold mb-4 text-center">
              Are you sure you want to delete this palette?
            </h2>
            <div className="flex justify-end gap-2 mt-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePaletteItem;

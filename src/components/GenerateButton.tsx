"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
import { generateColorPalettes } from "@/app/actions/generateColorPalettes";
import { ColorPaletteRequest } from "@/interfaces/Interfaces";
import { FaArrowRight } from "react-icons/fa6";
import { useColorPalette } from "@/context/ColorPaletteContext";
import { useColorMode } from "@/context/ColorModeProvider";
import { useLockedColors } from "@/context/LockedColorsContext";
import { defaultPalettes, PaletteConfig } from "@/data/paletteConfigs";
import { CircularProgress } from "@heroui/progress";

const GenerateButton = ({ count }: { count: string }) => {
  const {
    palettes,
    setPalettes,
    currentIndex,
    setCurrentIndex,
    currentPalette,
    setCurrentPalette,
  } = useColorPalette();
  const { selectedMode } = useColorMode();
  const { isLockedList } = useLockedColors();
  const [newPalettes, action, isPending] = useActionState(
    generateColorPalettes,
    []
  );

  const modeData: PaletteConfig = defaultPalettes[count];
  const prevLockedStateRef = useRef<boolean[]>([]);

  // 新しいパレットの適用
  useEffect(() => {
    if (newPalettes.length > 0) {
      setPalettes(newPalettes);
      setCurrentIndex(0);
      setCurrentPalette(newPalettes[0] || []);
    }
  }, [newPalettes, setPalettes, setCurrentIndex, setCurrentPalette]);

  const handleGenerate = async () => {
    const hasLockedChanged = isLockedList.some(
      (locked, index) => locked !== prevLockedStateRef.current[index]
    );

    if (hasLockedChanged || currentIndex >= palettes.length - 1) {
      const formattedPalette = currentPalette.map((color, index) =>
        isLockedList[index] ? color : "-"
      );

      const jsonData: ColorPaletteRequest = {
        mode: selectedMode,
        num_colors: modeData.num_colors,
        temperature: "1.2",
        num_results: 15,
        adjacency: modeData.adjacency,
        palette: formattedPalette,
      };

      startTransition(() => {
        action(jsonData);
      });

      prevLockedStateRef.current = [...isLockedList]; // 新しいロック状態を保存
    } else {
      setCurrentIndex((prev) => prev + 1);
      setCurrentPalette(palettes[currentIndex + 1]);
    }
  };

  return (
    <button
      onClick={handleGenerate}
      disabled={isPending}
      className="transition bg-zinc-700 hover:bg-zinc-800 text-sm text-white font-semibold px-3 py-2.5 gap-x-1 flex items-center rounded-md"
    >
      Generate
      {isPending ? (
        <CircularProgress
          aria-label="Generating..."
          size="sm"
          classNames={{ svg: "w-[14px] h-[14px]", indicator: "text-white" }}
        />
      ) : (
        <FaArrowRight size={14} />
      )}
    </button>
  );
};

export default GenerateButton;

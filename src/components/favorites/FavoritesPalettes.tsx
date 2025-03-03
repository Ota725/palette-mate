"use client";
import { supabasePalettesProps } from "@/interfaces/Interfaces";
import { useMediaQueryContext } from "../layouts/MediaQueryContext";
import { CiPalette } from "react-icons/ci";
import { useState, useCallback, useRef, useEffect } from "react";
import FavoritePaletteItem from "./FavoritePaletteItem";
import { copyToClipboard } from "@/utils/colorUtils";

const FavoritesPalettes = ({
  palettes,
}: {
  palettes: supabasePalettesProps[];
}) => {
  const { isMdUp } = useMediaQueryContext();
  const [activeColors, setActiveColors] = useState<{
    paletteId: string;
    colorIndex: number;
  } | null>(null);
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );
  const timerRefsMap = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    const timers = timerRefsMap.current; // 現在の値をローカル変数にコピー
    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
  }, []);

  const handleTap = useCallback(
    (paletteId: string, colorIndex: number, color: string) => {
      const uniqueKey = `${paletteId}-${colorIndex}`;
      const isActive =
        activeColors?.paletteId === paletteId &&
        activeColors?.colorIndex === colorIndex;
      if (!isMdUp) {
        if (isActive) {
          copyToClipboard(color, setCopiedStates, uniqueKey, timerRefsMap);
        } else {
          setActiveColors({ paletteId, colorIndex });
        }
      } else {
        copyToClipboard(color, setCopiedStates, uniqueKey, timerRefsMap);
      }
    },
    [activeColors, isMdUp]
  );

  const handleMouseEnter = useCallback(
    (paletteId: string, colorIndex: number) => {
      if (isMdUp) setActiveColors({ paletteId, colorIndex });
    },
    [isMdUp]
  );

  const handleMouseLeave = useCallback(() => {
    if (isMdUp) {
      setActiveColors(null);
      setCopiedStates({});
    }
  }, [isMdUp]);

  return (
    <div
      className="min-h-screen p-4 flex flex-col"
      style={{
        marginLeft: isMdUp ? "224px" : "0px",
        marginTop: isMdUp ? "0px" : "57px",
      }}
    >
      <h1 className="text-xl font-bold mb-4">Saved Palettes</h1>
      {palettes.length === 0 ? (
        <div className="flex flex-grow flex-col items-center justify-center text-zinc-500">
          <CiPalette size={120} />
          <p>You don&#39;t have any palette yet.</p>
        </div>
      ) : (
        <ul className="flex justify-around items-center flex-wrap gap-y-6">
          {palettes.map(({ id, colors }) => (
            <div key={id}>
              <FavoritePaletteItem
                paletteId={id}
                colors={colors ?? []}
                activeColors={activeColors}
                copiedStates={copiedStates}
                handleTap={handleTap}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPalettes;

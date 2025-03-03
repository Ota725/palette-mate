import { getLightestAndDarkestColors, getTextColor } from "@/utils/colorUtils";

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

  return (
    <li className="w-72 h-24 flex rounded-lg border overflow-hidden relative">
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
  );
};

export default FavoritePaletteItem;

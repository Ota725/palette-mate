import { Color } from "@/interfaces/Interfaces";
import { IconButton } from "@mui/material";
import { Copy, Lock, Menu, Sliders } from "lucide-react";

const ColorBlock = ({
  colors,
  copyToClipboard,
  toggleLock,
}: {
  colors: Color[];
  copyToClipboard: (hex: string) => void;
  toggleLock: (index: number) => void;
}) => {
  return (
    <div className="">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex items-center p-3"
          style={{ backgroundColor: color.hex }}
        >
          <span className="text-xl font-viga">{color.hex}</span>
          <div className="ml-auto">
            <IconButton aria-label="copy">
              <Menu className="h-5 w-5" />
            </IconButton>

            <IconButton
              aria-label="copy"
              onClick={() => copyToClipboard(color.hex)}
            >
              <Copy className="h-5 w-5" />
            </IconButton>

            <IconButton aria-label="edit-color">
              <Sliders className="h-5 w-5" />
            </IconButton>

            <IconButton aria-label="Lock" onClick={() => toggleLock(i)}>
              <Lock
                className={`h-5 w-5 ${color.locked ? "text-primary" : ""}`}
              />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorBlock;

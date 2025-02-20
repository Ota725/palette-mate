import SVGContainer from "@/components/SVGContainer";
import ColorPalettes from "./ColorPalettes";

// src/app/brand/[count]
const ThemePreview = () => {
  return (
    <div className="ml-56">
      <SVGContainer />
      <ColorPalettes />
    </div>
  );
};

export default ThemePreview;

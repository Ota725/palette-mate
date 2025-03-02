"use client";
import { supabasePalettesProps } from "@/interfaces/Interfaces";
import { useMediaQueryContext } from "../layouts/MediaQueryContext";
import { CiPalette } from "react-icons/ci";

const FavoritesPalettes = ({
  palettes,
}: {
  palettes: supabasePalettesProps[];
}) => {
  const { isMdUp } = useMediaQueryContext();
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
              <li className="w-72 h-24 flex rounded-lg border overflow-hidden">
                {(colors ?? []).map((color: string) => (
                  <div
                    key={color}
                    className="flex-1 h-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPalettes;

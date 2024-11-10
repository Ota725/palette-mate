"use client";
const PaletteHistory = ({ history }: { history: string[][] }) => {
  return (
    <div>
      <label className="px-4 text-base font-semibold mb-4">履歴</label>
      <div className="space-y-2">
        {history.map((palette, i) => (
          <div key={i} className="h-8 rounded-full overflow-hidden flex">
            {palette.map((color, j) => (
              <div
                key={j}
                className="flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaletteHistory;

export const getLightestAndDarkestColors = (
  palette: string[]
): { darkestColor: string; lightestColor: string } => {
  if (palette.length === 0) {
    throw new Error("Palette is empty");
  }

  // HEXカラーを数値に変換し、明るさ順にソート
  const sortedPalette = [...palette].sort(
    (a, b) =>
      parseInt(a.replace("#", ""), 16) - parseInt(b.replace("#", ""), 16)
  );

  return {
    darkestColor: sortedPalette[0], // 一番暗い色
    lightestColor: sortedPalette[sortedPalette.length - 1], // 一番明るい色
  };
};

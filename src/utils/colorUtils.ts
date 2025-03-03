// export const copyToClipboard = async (
//   color: string,
//   setCopiedColor: React.Dispatch<React.SetStateAction<string | null>>
// ) => {
//   try {
//     await navigator.clipboard.writeText(color);
//     setCopiedColor(color);
//     setTimeout(() => setCopiedColor(null), 1500);
//   } catch (error) {
//     console.error("Clipboard copy failed:", error);
//   }
// };

export const copyToClipboard = async (
  color: string,
  setCopiedState: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >,
  uniqueKey: string,
  timerRefsMap?: React.MutableRefObject<{ [key: string]: NodeJS.Timeout }>
) => {
  try {
    await navigator.clipboard.writeText(color);
    setCopiedState((prev) => ({ ...prev, [uniqueKey]: true }));

    if (timerRefsMap) {
      if (timerRefsMap.current[uniqueKey]) {
        clearTimeout(timerRefsMap.current[uniqueKey]);
      }

      timerRefsMap.current[uniqueKey] = setTimeout(() => {
        setCopiedState((prev) => ({ ...prev, [uniqueKey]: false }));
      }, 1000);
    }
  } catch (error) {
    console.error("Clipboard copy failed:", error);
  }
};

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

// 背景を10%暗くする
export const darkenHexColor = (hex: string, percentage: number): string => {
  // HEXコードが正しい形式か確認
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    throw new Error("Invalid HEX color format. Expected format: #RRGGBB");
  }

  // RGBに分割
  const [r, g, b] = hex
    .slice(1) // "#" を除去
    .match(/\w\w/g)!
    .map((x) => Math.max(0, Math.round(parseInt(x, 16) * (1 - percentage))));

  // 2桁のHEX形式に変換
  const toHex = (value: number) => value.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const getTextColor = (hex: string, lightest: string, darkest: string) =>
  parseInt(hex.replace("#", ""), 16) > 0xffffff / 2 ? darkest : lightest;

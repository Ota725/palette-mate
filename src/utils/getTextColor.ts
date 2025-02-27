export const getTextColor = (hex: string, lightest: string, darkest: string) =>
  parseInt(hex.replace("#", ""), 16) > 0xffffff / 2 ? darkest : lightest;

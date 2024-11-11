import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique, Viga } from "next/font/google";
import "./globals.css";

const ZenKakuGothicAntiqueFont = Zen_Kaku_Gothic_Antique({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ZenKakuGothicAntique",
  display: "swap",
});

const VigaFont = Viga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Viga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PaletteMate",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body
        className={`${ZenKakuGothicAntiqueFont.variable} ${VigaFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
export default RootLayout;

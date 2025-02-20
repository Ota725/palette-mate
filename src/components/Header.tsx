import HeaderPalette from "./HeaderPalette";
import ModeSelector from "./ModeSelector";
import AuthButtons from "./AuthButtons";
import BackButton from "./BackButton";
import GenerateButton from "./GenerateButton";

const Header = async ({
  initialPalettes,
  count,
}: {
  initialPalettes: string[][];
  count: string;
}) => {
  return (
    <header className="ml-56 mx-auto flex justify-end items-center px-4 bg-gray-50 text-black py-4 border-b">
      {/* 配色表示 */}
      <HeaderPalette initialPalettes={initialPalettes} />
      {/* モード変更 */}
      <ModeSelector />
      {/* ログイン・サインアップ */}
      <AuthButtons />

      <BackButton />
      {/* Generateボタン */}
      <GenerateButton count={count} />
    </header>
  );
};

export default Header;

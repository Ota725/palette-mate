import HeaderPalette from "./HeaderPalette";
import ModeSelector from "./ModeSelector";
import AuthButtons from "./AuthButtons";
import BackButton from "./BackButton";
import GenerateButton from "./GenerateButton";

const Header = async ({ count }: { count: string }) => {
  return (
    <header className="ml-56 mx-auto flex justify-end items-center px-4 bg-gray-50 text-black py-4 border-b">
      {/* 配色表示 */}
      <HeaderPalette />

      {/* モード変更 */}
      <ModeSelector />

      {/* 巻き戻しボタン */}
      <BackButton />

      {/* Generateボタン */}
      <GenerateButton count={count} />

      {/* ログイン・サインアップ */}
      <AuthButtons />
    </header>
  );
};

export default Header;

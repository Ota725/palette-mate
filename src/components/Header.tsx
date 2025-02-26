import HeaderPalette from "./HeaderPalette";
import ModeSelector from "./ModeSelector";
import AuthButtons from "./AuthButtons";
import BackButton from "./BackButton";
import GenerateButton from "./GenerateButton";
import { Box, Grid2 as Grid } from "@mui/material";
import Switcher from "./layouts/Switcher";
import SidebarOpenButton from "./SidebarOpenButton";

const Header = async ({ count }: { count: string }) => {
  return (
    <header className="fixed w-full px-4 py-2 z-10 flex justify-between items-start bg-gray-50 text-black border-b">
      {/* ハンバーガーメニュー */}
      <Switcher sp={<SidebarOpenButton />} />
      <Grid container direction="row-reverse" sx={{ flexGrow: 1 }}>
        {/* ボタン */}
        <Grid size={{ xs: 12, sm: "auto" }}>
          <div className="flex justify-end items-center text-end">
            {/* ログイン・サインアップ */}
            <AuthButtons />
            {/* モード変更 */}
            <ModeSelector />
            {/* 巻き戻しボタン */}
            <BackButton />
            {/* Generateボタン */}
            <GenerateButton count={count} />
          </div>
        </Grid>
        {/* カラーパレット */}
        <Grid
          size={{ xs: 12, sm: "auto" }}
          sx={{ paddingTop: { xs: 1, sm: 0 } }}
        >
          <Box display="flex" justifyContent="end" alignItems="center">
            {/* 配色表示 */}
            <HeaderPalette />
          </Box>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;

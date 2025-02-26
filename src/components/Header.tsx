import HeaderPalette from "./HeaderPalette";
import ModeSelector from "./ModeSelector";
import AuthButtons from "./AuthButtons";
import BackButton from "./BackButton";
import GenerateButton from "./GenerateButton";
import { Box, Grid2 as Grid } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import Switcher from "./layouts/Switcher";

const Header = async ({ count }: { count: string }) => {
  return (
    <header className="fixed w-full px-4 py-2 flex justify-between items-start bg-gray-50 text-black border-b">
      {/* ハンバーガーメニュー */}
      <Switcher
        sp={
          <IoMenu size={28} className="h-10 flex justify-center items-center" />
          // <Grid size={{ xs: 12, sm: "auto" }} offset={{ sm: 0 }}>
          //   <Box display="flex" justifyContent="start" alignItems="center">
          //     {/* 配色表示 */}
          //   </Box>
          // </Grid>
        }
      />
      <Grid container direction="row-reverse" sx={{ flexGrow: 1 }}>
        {/* ボタン */}
        <Grid size={{ xs: 12, sm: "auto" }}>
          <div className="flex justify-end items-center text-end">
            {/* モード変更 */}
            <ModeSelector />
            {/* 巻き戻しボタン */}
            <BackButton />
            {/* Generateボタン */}
            <GenerateButton count={count} />
            {/* ログイン・サインアップ */}
            <AuthButtons />
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

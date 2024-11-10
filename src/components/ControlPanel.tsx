"use client";
import { HarmonyType } from "@/interfaces/Interfaces";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";

const ControlPanel = ({
  colorCount,
  setColorCount,
  harmonyType,
  setHarmonyType,
  generateNewPalette,
}: {
  colorCount: number;
  setColorCount: (value: number) => void;
  harmonyType: HarmonyType;
  setHarmonyType: (value: HarmonyType) => void;
  generateNewPalette: () => void;
}) => {
  return (
    <div className="p-5 space-y-4">
      <div>
        <label className="block text-base font-semibold mb-2">色の数</label>
        <Slider
          sx={{ color: "#737373" }}
          value={colorCount}
          valueLabelDisplay="auto"
          onChange={(e, value) => setColorCount(value as number)}
          marks
          min={2}
          max={5}
          step={1}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">{2} min</Typography>
          <Typography variant="body2">{5} max</Typography>
        </Box>
      </div>
      <div className="">
        <label className="block text-base font-semibold mb-2">
          カラーハーモニー
        </label>
        <FormControl fullWidth>
          <Select
            className=""
            value={harmonyType}
            onChange={(e) => setHarmonyType(e.target.value as HarmonyType)}
          >
            <MenuItem value="complementary">補色</MenuItem>
            <MenuItem value="splitComplementary">分割補色</MenuItem>
            <MenuItem value="analogous">類似職</MenuItem>
            <MenuItem value="triadic">トライアド</MenuItem>
            <MenuItem value="tetradic">テトラード</MenuItem>
            <MenuItem value="monochromatic">モノクロマティック</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        className="w-full bg-neutral-500 rounded-full"
        variant="contained"
        onClick={generateNewPalette}
      >
        作成
      </Button>
    </div>
  );
};

export default ControlPanel;

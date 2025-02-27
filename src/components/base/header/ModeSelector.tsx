// ModeSelector.tsx
"use client";
import { useColorMode } from "@/context/ColorModeProvider";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { LuAtom } from "react-icons/lu";

const ModeSelector = () => {
  const { selectedMode, setSelectedMode } = useColorMode();

  const radioOptions = [
    { value: "transformer", label: "Transformer" },
    { value: "diffusion", label: "Diffusion" },
    { value: "random", label: "Random" },
  ];

  return (
    <div>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <div className="z-10 mx-4 p-1 flex justify-center items-center cursor-pointer">
            <LuAtom size={20} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 bg-white border rounded-lg ">
          <div className="w-full">
            <FormLabel component="legend">Generation options</FormLabel>
            <RadioGroup
              color="success"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
            >
              {radioOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio color="success" />}
                  label={option.label}
                  className="mx-0 my-1 p-1 border shadow-sm text-gray-600 rounded-sm"
                />
              ))}
            </RadioGroup>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ModeSelector;

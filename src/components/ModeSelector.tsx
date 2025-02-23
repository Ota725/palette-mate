// ModeSelector.tsx
"use client";
import { useColorMode } from "@/context/ColorModeProvider";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Radio, RadioGroup } from "@heroui/radio";
import { cn } from "@heroui/react";
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
          <div className="w-10 h-10 z-10 mx-4 flex justify-center items-center cursor-pointer border">
            <LuAtom size={20} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4 bg-white border rounded-lg ">
          <RadioGroup
            color="success"
            label="Generation options"
            value={selectedMode}
            onValueChange={setSelectedMode}
            className="w-full"
          >
            {radioOptions.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                classNames={{
                  base: cn(
                    "inline-flex m-0 bg-content1 items-center",
                    "max-w-[300px] cursor-pointer rounded-sm p-3 border shadow-sm"
                  ),
                }}
              >
                {option.label}
              </Radio>
            ))}
          </RadioGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ModeSelector;

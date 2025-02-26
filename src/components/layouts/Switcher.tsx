"use client";

import { styled } from "@mui/material";

interface Props {
  sp?: JSX.Element;
  pc?: JSX.Element;
}

const PcOnly = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SpOnly = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function Switcher({ pc, sp }: Props) {
  return (
    <>
      {pc && <PcOnly>{pc}</PcOnly>}
      {sp && <SpOnly>{sp}</SpOnly>}
    </>
  );
}

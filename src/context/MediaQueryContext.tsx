"use client";

import { createContext, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MediaQueryContextProps {
  isMdUp: boolean;
  isSmUp: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextProps | undefined>(
  undefined
);

export function MediaQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MediaQueryContext.Provider value={{ isMdUp, isSmUp }}>
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMediaQueryContext() {
  const context = useContext(MediaQueryContext);
  if (!context) {
    throw new Error(
      "useMediaQueryContext must be used within a MediaQueryProvider"
    );
  }
  return context;
}

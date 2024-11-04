"use client";

import { ThemeProvider as NexThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NexThemeProvider {...props}>{children}</NexThemeProvider>;
}

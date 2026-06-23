"use client";

import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <SmoothScroll />
      {children}
    </ThemeProvider>
  );
}

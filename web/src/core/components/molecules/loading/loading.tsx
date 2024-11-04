"use client";

import Image from "next/image";
import { TextLogo } from "../../atoms";
import { useTheme } from "next-themes";

export default function Loading() {
  const { theme } = useTheme();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <Image
        src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
        alt=""
        width={100}
        height={100}
      />
      <div className="flex items-center justify-between gap-8 text-4xl">
        <span className="font-bold">Stay</span>
        <TextLogo />
      </div>
    </div>
  );
}

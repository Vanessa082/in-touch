"use client"

import Image from "next/image";
import { TextLogo } from "../atoms";
import { useTheme } from "next-themes"

export default function Loading() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen w-screen">
      <Image src={theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"} alt="" width={100} height={100} />
      <div className="flex justify-between items-center gap-8 text-4xl ">
        <span className="font-bold">Stay</span>
        <TextLogo />
      </div>
    </div>
  )
}

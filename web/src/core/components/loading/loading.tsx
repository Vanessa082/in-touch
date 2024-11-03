import Image from "next/image";
import { TextLogo } from "../atoms";
import { useTheme } from "next-themes"

export default function Loading() {
  const { theme } = useTheme()
  return (
    <div>
      <Image src={theme === "light" ? "/logo-light.svg" : "/logo-dark.svg"} alt="" width={100} height={100} />
      <div>
        <span>Stay</span>
        <TextLogo />
      </div>
    </div>
  )
}
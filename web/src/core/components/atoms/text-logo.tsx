import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface TextlogoProps extends ComponentProps<"span"> {
  includeLogo?: boolean;
  sxImg?: string;
}

export function Textlogo({ className, sxImg, includeLogo = false, ...restProps }: TextlogoProps) {
  return (
    <span className={cn("text-app-text-dark-500 font-bold flex items-center justify-center w-fit", className)}>
      <span className="text-app-text-blue-500">In</span>
      <span>Touch</span>
    
      {
        includeLogo ? (
          <Image
            src="/logo-light.svg"
            alt="InTouch Logo"
            height={100}
            width={100}
            className={cn("w-full size-[50px] rounded-full", sxImg)}
          />
        ) : null
      }
    </span>
  )
}

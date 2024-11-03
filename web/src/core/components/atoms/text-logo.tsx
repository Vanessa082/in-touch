import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

interface TextlogoProps extends ComponentProps<"span"> {
  includeLogo?: boolean;
  sxImg?: string;
  sxText?: string;
}

export function TextLogo({
  className,
  sxImg,
  sxText,
  includeLogo = false,
  ...restProps
}: TextlogoProps) {
  return (
    <span
      className={cn(
        "flex w-fit items-center justify-center font-bold ",
        className
      )}
      {...restProps}
    >
      <span className={cn("flex items-start justify-center", sxText)}>
        <span className="text-app-text-blue-500">In</span>
        <span>Touch</span>
      </span>

      {includeLogo ? (
        <Image
          src="/logo-light.svg"
          alt="InTouch Logo"
          height={100}
          width={100}
          className={cn("size-[50px] w-full rounded-full", sxImg)}
        />
      ) : null}
    </span>
  );
}

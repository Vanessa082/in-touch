import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function MainTag({ className, ...restProps }: ComponentProps<"main">) {
  return (
    <main
      {...restProps}
      className={cn("mx-auto min-h-[90vh] w-app-w", className)}
    />
  );
}

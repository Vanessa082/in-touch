import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getProfileURLFromInitials = (name: string) => {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${name}`;
}

export const getInitials = (name: string = "") => {
  let res = (name.match(/[a-z]/i) || [""])[0];

  const breakPoints = name.replace(/[^a-z]/ig, " ").split(" ");

  if (breakPoints.length > 1) {
    const last = breakPoints.at(-1) || "";

    res += last[0].toUpperCase();
  }

  return res;
}

/* eslint-disable @typescript-eslint/no-unsafe-call */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return twMerge(clsx(inputs));
};

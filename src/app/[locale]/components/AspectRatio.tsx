"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "~/lib/utils";

interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}

export function AspectRatio({ ratio = 1, children, className }: AspectRatioProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <AspectRatioPrimitive.Root ratio={ratio}>
        {children}
      </AspectRatioPrimitive.Root>
    </div>
  );
}

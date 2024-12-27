import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

interface BaseContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseContainer({ children, className }: BaseContainerProps) {
  return (
    <div className={cn(
      "container mx-auto",
      "px-4 sm:px-6 md:px-8 lg:px-10",
      "max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]",
      className
    )}>
      {children}
    </div>
  );
}

import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
};

const BaseContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("w-full md:max-w-[1200px]", className)}>{children}</div>
  );
};

export default BaseContainer;

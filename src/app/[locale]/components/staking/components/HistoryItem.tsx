import { Advent_Pro, Afacad } from "next/font/google";
import { cn } from "~/lib/utils";

const afacad = Afacad({ subsets: ["latin"] });
const advent = Advent_Pro({ subsets: ["latin"] });

export default function HistoryItem() {
  return (
    <div className="
      min-w-[280px] sm:min-w-[300px] 
      border-r border-gray-300 
      p-4 md:p-6
    ">
      <div className={cn(
        "flex flex-col gap-3 md:gap-4",
        afacad.className
      )}>
        {/* 标题 */}
        <div className="text-lg md:text-xl">
          Contract Title
        </div>

        {/* 数量 */}
        <div>
          <div className="text-sm text-gray-400">Amount:</div>
          <div className={cn(
            advent.className,
            "text-xl md:text-2xl"
          )}>
            400,000,000,000
          </div>
        </div>

        {/* 时间 */}
        <div>
          <div className="text-sm text-gray-400">Time:</div>
          <div className={cn(
            advent.className,
            "text-xl md:text-2xl"
          )}>
            2024-01-01 12:00
          </div>
        </div>

        {/* 状态 */}
        <div className="
          inline-block w-fit 
          rounded-full bg-[rgba(120,251,185,0.1)] 
          px-3 md:px-4 py-1 
          text-sm md:text-base
          text-[rgb(120,251,185)]
        ">
          Success
        </div>
      </div>
    </div>
  );
}

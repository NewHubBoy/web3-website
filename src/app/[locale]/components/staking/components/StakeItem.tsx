import { Advent_Pro, Afacad } from "next/font/google";
import { cn } from "~/lib/utils";

const afacad = Afacad({ subsets: ["latin"] });
const advent = Advent_Pro({ subsets: ["latin"] });

interface StakeItemProps {
  index: number;
  contractAddress?: string;
}

export default function StakeItem({ index }: { index: number }) {
  return (
    <div className="min-w-[280px] sm:min-w-[300px] p-3 md:p-4">
      <div className={cn(
        "flex flex-col gap-4 md:gap-5",
        "border-b border-r border-gray-300",
        "p-8 md:p-10 lg:p-12",
        "bg-[length:60px_60px] md:bg-[length:70px_70px] lg:bg-[length:80px_80px]",
        "bg-[top_0.8rem_left_1.5rem] bg-no-repeat select-none",
        parseInt(index.toString(), 10) % 2 === 0
          ? "bg-[url('/images/Vector-stake.png')]"
          : "bg-[url('/images/Vector@2x.png')]",
      )}>
        <div className={cn(
          afacad.className,
          "text-xl md:text-2xl font-light"
        )}>
          Contract Title
        </div>
        <div className={cn(afacad.className)}>
          <div className="text-sm text-gray-400">Current total stake :</div>
          <div className={cn(
            advent.className,
            "text-2xl md:text-3xl"
          )}>
            400,000,000,000
          </div>
        </div>
        <div className={cn(afacad.className)}>
          <div className="text-sm text-gray-400">My stake:</div>
          <div className={cn(
            advent.className,
            "text-2xl md:text-3xl"
          )}>
            Not Staked Yet
          </div>
        </div>
        <div className={cn(afacad.className)}>
          <div className="text-sm text-gray-400">Current total stake :</div>
          <div className={cn(
            advent.className,
            "text-2xl md:text-3xl"
          )}>
            N/A
          </div>
        </div>
        <div className="flex justify-between text-lg md:text-xl">
          <div className="
            inline-block cursor-pointer 
            rounded-full bg-black 
            px-4 md:px-6 py-1 
            font-light text-white 
            hover:bg-[rgb(120,251,185)] hover:text-black
            transition-colors duration-200
          ">
            Stake
          </div>
          <div className="
            inline-block 
            rounded-full border border-gray-300 
            px-2 md:px-3 py-1
            text-gray-300
          ">
            Withdraw
          </div>
        </div>
      </div>
    </div>
  );
}

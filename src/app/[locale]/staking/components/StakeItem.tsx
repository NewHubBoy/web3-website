import { Advent_Pro, Afacad } from "next/font/google";
import { type PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

const afacad = Afacad({ subsets: ["latin"] });
const advent = Advent_Pro({ subsets: ["latin"] });

interface StakeItemProps {
  index: number;
  contractAddress?: string;
}

const StakeItem: React.FC<PropsWithChildren<StakeItemProps>> = ({ index }) => {
  return (
    <div
      className={cn(
        "flex w-[320px] flex-col gap-5 border-b border-r border-gray-300 bg-[length:80px_80px] bg-[top_0.8rem_left_1.5rem] bg-no-repeat p-12",
        parseInt(index.toString(), 10) % 2 === 0
          ? "bg-[url('/images/Vector-stake.png')]"
          : "bg-[url('/images/Vector@2x.png')]",
      )}
    >
      <div className={cn(afacad.className, "text-2xl font-light")}>
        Contract Title
      </div>
      <div className={cn(afacad.className)}>
        <div className="text-sm text-gray-400">Current total stake :</div>
        <div className={cn(advent.className, "text-3xl")}>400,000,000,000</div>
      </div>
      <div className={cn(afacad.className)}>
        <div className="text-sm text-gray-400">My stake:</div>
        <div className={cn(advent.className, "text-3xl")}>Not Staked Yet</div>
      </div>
      <div className={cn(afacad.className)}>
        <div className="text-sm text-gray-400">Current total stake :</div>
        <div className={cn(advent.className, "text-3xl")}>N/A</div>
      </div>
      <div className="flex justify-between text-xl">
        <div className="inline-block cursor-pointer rounded-full bg-black px-6 font-light text-white hover:bg-[rgb(120,251,185)] hover:text-black">
          Stake
        </div>
        <div className="inline-block rounded-full border border-gray-300 px-3 text-gray-300">
          Withdraw
        </div>
      </div>
    </div>
  );
};

export default StakeItem;

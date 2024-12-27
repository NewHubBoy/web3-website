import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import BaseContainer from "../components/BaseContainer";
import { Afacad } from "next/font/google";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { AspectRatio } from "../components/AspectRatio";
import StakeItem from "./components/StakeItem";
import { ScrollArea, ScrollBar } from "../components/ScrollArea";
import HistoryItem from "./components/HistoryItem";

const afacad = Afacad({ subsets: ["latin"] });

export default function Staking() {
  const t = useTranslations("Staking");
  return (
    <BaseContainer className="mx-auto min-h-[calc(100vh)] w-full">
      <div className="flex min-h-full w-full flex-col">
        <div className="grid w-full grid-cols-2 lg:h-[370px]">
          <div className={cn(afacad.className, "pl-28 pt-28 text-6xl")}>
            Obtain Contribution From Staking
          </div>
          <div className="relative">
            <div className="absolute left-7 top-20 w-[240px]">
              <AspectRatio ratio={1 / 0.95}>
                <Image
                  src={"/images/Group-2.png"}
                  alt="cion"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div className="absolute left-44 top-5 w-[240px]">
              <AspectRatio ratio={1 / 0.95}>
                <Image
                  src={"/images/Group-1.png"}
                  alt="cion"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div className="absolute right-0 top-20 w-[180px]">
              <AspectRatio ratio={0.65 / 0.95}>
                <Image
                  src={"/images/Group.png"}
                  alt="cion"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div className="absolute right-0 top-28 h-64 w-64">
              <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-[rgb(120,251,185)] to-[rgb(120,251,185)] opacity-75 blur-2xl"></div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ScrollArea className="border-t border-gray-300">
            <div className="flex w-max">
              <StakeItem index={1} />
              <StakeItem index={2} />
              <StakeItem index={3} />
              <StakeItem index={4} />
              <StakeItem index={5} />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
      <div className="pt-8">
        <div className={(cn(afacad.className), "text-3xl")}>
          Operation History
        </div>
        <div className="text-lg text-gray-300">
          <span className="underline">Connect Wallet</span> to view
        </div>

        <ScrollArea className="border-t border-gray-300 bg-white">
          <div className="flex w-max">
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
          </div>
        </ScrollArea>
      </div>
    </BaseContainer>
  );
}

export const SectionStaking = () => {
  return (
    <section id="staking">
      <Staking />
    </section>
  );
};

import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import BaseContainer from "../components/BaseContainer";
import { AspectRatio } from "../components/AspectRatio";
import Image from "next/image";
import { Afacad } from "next/font/google";
import { cn } from "~/lib/utils";
import Address from "./AdressComponent";

// load font
const afacad = Afacad({ subsets: ["latin"] });
export default function Airdrop() {
  const t = useTranslations("Airdrop");
  return (
    <BaseContainer className="mx-auto flex h-[calc(100vh)] flex-col items-center justify-center gap-14">
      <div className="grid w-full grid-cols-8 py-16">
        <div className="col-span-2 w-[275px]">
          <AspectRatio ratio={1.05 / 1}>
            <Image
              alt="coin"
              src={"/images/coin x2.png"}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <div className="col-span-6 pl-16 pt-10">
          <div
            className={cn(
              "text-[72px] leading-none tracking-wider",
              afacad.className,
            )}
          >
            Binance Airdrop Activity
          </div>
          <div
            className={cn(
              "mt-6 text-[18px] leading-tight tracking-widest text-gray-400",
              afacad.className,
            )}
          >
            Ethereum’s leading liquid staking token, with best-in-class
            security, deepest liquidity and competitive rewards.Ethereum’s
            leading liquid staking token, with best-in-class security, deepest
            liquidity and competitive rewards.Ethereum’s leading liquid staking
            token, with best-in-class security, deepest liquidity and
            competitive rewards.
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4">
        <div className="col-span-1 flex flex-col items-center">
          <div className="text-3xl font-semibold">100,000,000,000</div>
          <div className="text-xs text-gray-400">Total Airdrop</div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="text-3xl font-semibold">3200</div>
          <div className="text-xs text-gray-400">Available to Claim</div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="text-3xl font-semibold">3.2%</div>
          <div className="text-xs text-gray-400">My Contribution</div>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="w-[180px] rounded-full bg-black py-4 text-center text-3xl text-white hover:bg-[rgb(120,251,185)] hover:text-black">
            Claim
          </div>
          <div className="text-xs">
            <Address />
          </div>
        </div>
      </div>
    </BaseContainer>
  );
}

export const SectionAirDrop = () => {
  return (
    <section id="airdrop">
      <Airdrop />
    </section>
  );
};

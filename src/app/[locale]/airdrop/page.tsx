import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import BaseContainer from "../components/BaseContainer";
import { AspectRatio } from "../components/AspectRatio";
import Image from "next/image";
import { Afacad } from "next/font/google";
import { cn } from "~/lib/utils";

// load font
const afacad = Afacad({ subsets: ["latin"] });
export default function Airdrop() {
  const t = useTranslations("Airdrop");
  return (
    <BaseContainer className="mx-auto">
      <div className="grid grid-cols-8 py-16">
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
        <div className="col-span-6 pl-16">
          <div
            className={cn(
              "text-[4.6vw] leading-none tracking-wider",
              afacad.className,
            )}
          >
            Binance Airdrop Activity
          </div>
          <div
            className={cn(
              "text-[1.02vw] leading-tight tracking-widest text-gray-400 mt-6",
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
    </BaseContainer>
  );
}

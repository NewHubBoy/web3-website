import { useTranslations } from "next-intl";
import { Advent_Pro } from "next/font/google";
import Image from "next/image";
import { cn } from "~/lib/utils";
import BaseContainer from "./BaseContainer";
import { TfiWorld } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import WalletConnect from "./ConnectWallet";

const advent = Advent_Pro({ subsets: ["latin"] });

export default function Header() {
  const t = useTranslations("Head");
  return (
    <header className="w-full border-b">
      <BaseContainer className="m-auto flex justify-between px-12 py-6">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <div className={cn(advent.className)}>
          <Image
            src={"/images/logo.png"}
            width={1204 / 8}
            height={231 / 8}
            alt="logo"
          />
        </div>
        <nav className="flex items-center">
          <div className="mr-16 flex justify-around gap-12 text-2xl">
            <span>{t("airdrop")}</span>
            <span>{t("staking")}</span>
            <span>{t("swap")}</span>
            <span>{t("ranking")}</span>
          </div>
          <div className="mr-16 flex justify-around gap-6 text-xl">
            <TfiWorld />
            <BsTwitterX />
            <BsDiscord />
          </div>
          <WalletConnect />
          {/* <appkit-button size="sm" balance="hide" /> */}
        </nav>
      </BaseContainer>
    </header>
  );
}

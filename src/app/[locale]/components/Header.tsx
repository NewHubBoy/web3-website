"use client";

import { useTranslations } from "next-intl";
import { Advent_Pro } from "next/font/google";
import Image from "next/image";
import { cn } from "~/lib/utils";
import BaseContainer from "./BaseContainer";
import WalletConnect from "./ConnectWallet";
import { Link } from "~/i18n/routing";

const advent = Advent_Pro({ subsets: ["latin"] });

export default function Header() {
  const t = useTranslations("Head");
  return (
    <header className="w-full border-b border-gray-300">
      <BaseContainer className="m-auto flex justify-between px-12 py-6">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <div className={cn(advent.className, "flex items-center")}>
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={1204 / 8}
              height={231 / 8}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex items-center">
          <div className="mr-16 flex justify-around gap-12 text-2xl">
            <Link href="/airdrop">
              <span>{t("airdrop")}</span>
            </Link>
            <Link href="/staking">
              <span>{t("staking")}</span>
            </Link>
            <Link href="/swap">
              <span>{t("swap")}</span>
            </Link>
            <Link href="/ranking">
              <span>{t("ranking")}</span>
            </Link>
          </div>
          <div className="mr-16 flex justify-around gap-6">
            <Image
              src={"/images/website.png"}
              alt="website"
              className="cursor-pointer"
              width={20}
              height={18}
            />
            <Image
              src={"/images/x.png"}
              alt="twitter"
              className="cursor-pointer"
              width={20}
              height={16}
            />
            <Image
              src={"/images/discord.png"}
              alt="discord"
              className="cursor-pointer"
              width={26}
              height={18}
            />
          </div>
          <WalletConnect />
        </nav>
      </BaseContainer>
    </header>
  );
}

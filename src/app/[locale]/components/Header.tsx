"use client";

import { useTranslations } from "next-intl";
import { Advent_Pro } from "next/font/google";
import Image from "next/image";
import { cn } from "~/lib/utils";
import BaseContainer from "./BaseContainer";
import WalletConnect from "./ConnectWallet";
import { Link } from "~/i18n/routing";
import { toast } from "sonner";

const advent = Advent_Pro({ subsets: ["latin"] });

export default function Header() {
  const t = useTranslations("Head");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full border-b border-gray-300 bg-white/80 backdrop-blur-md z-50">
      <BaseContainer className="m-auto flex justify-between px-12 py-6">
        <div className={cn(advent.className, "flex items-center")}>
          <Link href={"#index"} onClick={(e) => handleScroll(e, '#index')}>
            <Image
              src={"/images/logo.png"}
              width={1204 / 8}
              height={231 / 8}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex items-center">
          <div className="mr-16 flex justify-around gap-12 text-2xl text-gray-400">
            <Link href="#airdrop" onClick={(e) => handleScroll(e, '#airdrop')}>
              <span>{t("airdrop")}</span>
            </Link>
            <Link href="#staking" onClick={(e) => handleScroll(e, '#staking')}>
              <span>{t("staking")}</span>
            </Link>
            <Link
              href="#"
              onClick={() => {
                toast("coming soon ~");
              }}
            >
              <span>{t("swap")}</span>
            </Link>
            <Link href="#ranking" onClick={(e) => handleScroll(e, '#ranking')}>
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

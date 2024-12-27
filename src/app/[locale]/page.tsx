import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "~/i18n/routing";
import { AspectRatio } from "./components/AspectRatio";
import { SectionAirDrop } from "./components/airdrop";
import { SectionStaking } from "./components/staking";
import { SectionRanking } from "./components/ranking";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <div
        className="flex h-[calc(100vh-81px)] items-center justify-center px-4 md:px-8 lg:px-0"
        id="index"
      >
        <div className="relative w-[90vw] md:w-[80vw] lg:w-[70vw] rounded-md drop-shadow-[20px_20px_0px_rgba(64,197,152,0.25)]">
          <AspectRatio ratio={16 / 9}>
            <Image
              alt="banner"
              src={"/images/000BG 1 x2.png"}
              fill
              className="rounded-md object-cover"
            />
            <div className="absolute top-[40%] w-full bg-[rgba(31,255,180,0.69)] py-3 md:py-4 lg:py-5 text-center">
              <span className="text-wrap text-[8vw] md:text-[7vw] lg:text-[6vw] leading-none">
                Title:Current Activity Current Activity Current Activity
              </span>
              <button className="mx-auto mt-4 md:mt-6 lg:mt-10 flex w-[40vw] md:w-[30vw] lg:w-[20vw] items-center justify-center rounded-full bg-black px-4 md:px-6 lg:px-10 py-1 tracking-widest text-white hover:bg-[rgb(120,251,185)] hover:text-black">
                <span className="text-sm md:text-base lg:text-lg text-white">
                  Find Me On Telegram
                </span>
              </button>
            </div>
          </AspectRatio>
        </div>
      </div>
      <div className="space-y-8 md:space-y-12 lg:space-y-16 py-8 md:py-12 lg:py-16">
        <SectionAirDrop />
        <SectionStaking />
        <SectionRanking />
      </div>
    </div>
  );
}

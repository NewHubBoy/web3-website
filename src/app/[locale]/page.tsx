import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "~/i18n/routing";
import { AspectRatio } from "./components/AspectRatio";
import { SectionAirDrop } from "./airdrop/page";
import { SectionStaking } from "./staking/page";
import { SectionRanking } from "./ranking/page";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <div
        className="flex h-[calc(100vh-81px)] items-center justify-center"
        id="index"
      >
        <div className="relative w-[70vw] rounded-md drop-shadow-[20px_20px_0px_rgba(64,197,152,0.25)]">
          <AspectRatio ratio={16 / 9}>
            <Image
              alt="banner"
              src={"/images/000BG 1 x2.png"}
              fill
              className="rounded-md object-cover"
            />
            <div className="absolute top-[40%] w-full bg-[rgba(31,255,180,0.69)] py-5 text-center">
              <span className="text-wrap text-[6vw] leading-none">
                Title:Current Activity Current Activity Current Activity
              </span>
              <div className="mx-auto mt-10 flex w-[20vw] items-center justify-center rounded-full bg-black px-6 py-2">
                <span className="text-white">Find Me On Telegram</span>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
      <SectionAirDrop />
      <SectionStaking />
      <SectionRanking />
    </div>
  );
}

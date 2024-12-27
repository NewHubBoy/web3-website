'use client';

import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Afacad } from "next/font/google";
import StakeItem from "./components/StakeItem";
import { ScrollArea, ScrollBar } from "~/app/[locale]/components/ScrollArea";
import HistoryItem from "./components/HistoryItem";
import BaseContainer from "~/app/[locale]/components/BaseContainer";
import { AspectRatio } from "~/app/[locale]/components/AspectRatio";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const afacad = Afacad({ subsets: ["latin"] });

export default function Staking() {
  const t = useTranslations("Staking");
  return (
    <section id="staking">
      <BaseContainer className="mx-auto min-h-[calc(100vh)] w-full px-4 md:px-6 lg:px-8">
        <div className="flex min-h-full w-full flex-col">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 lg:h-[370px]">
            <div className={cn(
              afacad.className,
              "text-3xl md:text-4xl lg:text-6xl pt-8 md:pt-16 lg:pt-28 px-4 md:px-8 lg:pl-28 text-center md:text-left"
            )}>
              Obtain Contribution From Staking
            </div>
            <div className="relative mt-8 md:mt-0 h-[300px] md:h-[350px] lg:h-auto">
              <div className="absolute left-4 md:left-7 top-10 md:top-20 w-[180px] md:w-[220px] lg:w-[240px]">
                <AspectRatio ratio={1 / 0.95}>
                  <Image
                    src={"/images/Group-2.png"}
                    alt="coin"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute left-24 md:left-44 top-0 md:top-5 w-[180px] md:w-[220px] lg:w-[240px]">
                <AspectRatio ratio={1 / 0.95}>
                  <Image
                    src={"/images/Group-1.png"}
                    alt="coin"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute right-4 md:right-0 top-10 md:top-20 w-[140px] md:w-[160px] lg:w-[180px]">
                <AspectRatio ratio={0.65 / 0.95}>
                  <Image
                    src={"/images/Group.png"}
                    alt="coin"
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute right-4 md:right-0 top-16 md:top-28 h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
                <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-[rgb(120,251,185)] to-[rgb(120,251,185)] opacity-75 blur-2xl"></div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="border-t border-gray-300">
              <Swiper
                modules={[FreeMode]}
                slidesPerView="auto"
                spaceBetween={16}
                freeMode={true}
                className="w-full py-6 md:py-8 lg:py-10"
              >
                {[1, 2, 3, 4, 5].map((index) => (
                  <SwiperSlide key={index} className="!w-auto">
                    <StakeItem index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="pt-6 md:pt-8 lg:pt-10 space-y-4 md:space-y-6">
          <div className={cn(afacad.className, "text-2xl md:text-3xl")}>
            Operation History
          </div>
          <div className="text-base md:text-lg text-gray-300">
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
    </section>
  );
}

export const SectionStaking = () => {
  return (
    <section id="staking">
      <Staking />
    </section>
  );
};

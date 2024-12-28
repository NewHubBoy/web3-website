import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import BaseContainer from "~/app/[locale]/components/BaseContainer";
import { AspectRatio } from "~/app/[locale]/components/AspectRatio";
import Image from "next/image";
import { Afacad } from "next/font/google";
import { cn } from "~/lib/utils";

const afacad = Afacad({ subsets: ["latin"] });

export default function Ranking() {
  const t = useTranslations("Ranking");

  const arr = Array.from({ length: 15 }, (_, i) => i + 1);
  return (
    <BaseContainer className="relative mx-auto min-h-[calc(100vh)] w-full bg-[url('/images/Rudder.png')] bg-contain bg-no-repeat pb-20 pt-32">
      <div className="absolute right-0 top-[10%] h-[640px] w-[640px]">
        <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-[rgba(27,128,200,0.27)] to-[rgba(27,128,200,0.27)] opacity-75 blur-2xl"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl">Ranking</div>
        <div className="text-lg text-gray-500">
          Captains of the age of crypto discovery
        </div>
      </div>
      <div>
        <div className="grid w-full grid-cols-6">
          {arr.map((item) => {
            if (item == 1) {
              return (
                <div
                  key={item}
                  className="col-span-6 mt-20 flex items-center justify-center"
                >
                  <div className="relative pl-11">
                    <div className="absolute left-0 top-[-40px] w-[90px]">
                      <AspectRatio ratio={1.12 / 1}>
                        <Image
                          alt="coin"
                          src={"/images/Top1.png"}
                          fill
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-full bg-white px-36 py-2">
                      <div className="text-3xl">0xde23b.....3e3o</div>
                      <div className="text-lg text-gray-400">
                        contribution: 9.7%
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (item == 2 || item == 3) {
              return (
                <div
                  key={item}
                  className="col-span-3 mt-12 flex items-center justify-center"
                >
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-[-20px] w-[70px]">
                      <AspectRatio ratio={1.12 / 1}>
                        <Image
                          alt="coin"
                          src={
                            item == 3
                              ? "/images/Top3.png"
                              : "/images/Top2.png"
                          }
                          fill
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-full bg-white px-28 py-2">
                      <div className="text-2xl">0xde23b.....3e3o</div>
                      <div className="text-sm text-gray-400">
                        contribution: 9.7%
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item} className="col-span-2 mt-12">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-[50%] w-[70px] translate-x-[30%] translate-y-[-50%] text-3xl font-semibold">
                      {item}
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-full bg-white">
                      <div className="text-2xl">0xde23b.....3e3o</div>
                      <div className="text-sm text-gray-400">
                        contribution: 9.7%
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </BaseContainer>
  );
}

export const Partners = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-[-4%] top-[10%] h-[840px] w-[840px]">
        <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-[rgba(31,255,180,0.6)] to-[rgba(120,251,185,0.4)] opacity-75 blur-2xl"></div>
      </div>
      <BaseContainer className="relative mx-auto min-h-[calc(100vh)] w-full">
        <div className="w-full pt-20">
          <div className="flex w-full items-center justify-center">
            <div className="w-[320px]">
              <AspectRatio ratio={1.22 / 1}>
                <Image
                  alt="coin"
                  src={"/images/01.png"}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className={cn(afacad.className, "mt-10 text-6xl")}>
              Partners & Investors
            </div>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export const SectionRanking = () => {
  return (
    <section id="ranking">
      <Ranking />
      <Partners />
    </section>
  );
};

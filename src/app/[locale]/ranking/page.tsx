import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";
import BaseContainer from "../components/BaseContainer";

export default function Ranking() {
  const t = useTranslations("Ranking");

  const arr = Array.from({ length: 15 }, (_, i) => i + 1);
  return (
    <BaseContainer className="relative mx-auto min-h-[calc(100vh)] w-full bg-[url('/images/Rudder.png')] bg-contain bg-no-repeat pt-32">
      <div className="absolute right-0 top-[10%] h-[640px] w-[640px]">
        <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-[rgba(27,128,200,0.27)] to-[rgba(27,128,200,0.27)] opacity-75 blur-2xl"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl">Ranking</div>
        <div className="text-lg text-gray-500">Captains of the age of crypto discovery</div>
      </div>
      <div>
        <div>
          {arr.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </div>
      </div>
    </BaseContainer>
  );
}

export const SectionRanking = () => {
  return (
    <section id="ranking">
      <Ranking />
    </section>
  );
};

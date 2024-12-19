import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function Ranking() {
  const t = useTranslations("Ranking");
  return (
    <div>
      <h1>{t("ranking")}</h1>
    </div>
  );
}

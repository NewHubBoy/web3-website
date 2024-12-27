import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function Swap() {
  const t = useTranslations("Swap");
  return (
    <div>
      <h1>{t("swap")}</h1>
    </div>
  );
}

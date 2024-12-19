import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function Staking() {
  const t = useTranslations("Staking");
  return (
    <div>
      <h1>{t("staking")}</h1>
    </div>
  );
}

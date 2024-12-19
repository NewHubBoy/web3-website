import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export default function Airdrop() {
  const t = useTranslations("Airdrop");
  return (
    <div>
      <h1>{t("airdrop")}</h1>
    </div>
  );
}

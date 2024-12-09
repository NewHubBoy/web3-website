import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

function ConnectButton() {
  return <appkit-button />;
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <ConnectButton />
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { headers } from "next/headers"; // added
import ContextProvider from "~/context/ReownProvider";
import { Advent_Pro } from "next/font/google";
import Header from "./components/Header";
import "~/styles/globals.css";

// load font
const Advent = Advent_Pro({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const cookies = (await headers()).get("cookie");

  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={Advent.className}>
        <NextIntlClientProvider messages={messages}>
          <ContextProvider cookies={cookies}>
            <Header />
            {children}
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

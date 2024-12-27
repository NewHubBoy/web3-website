import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { headers } from "next/headers";
import ContextProvider from "~/context/ReownProvider";
import { Advent_Pro } from "next/font/google";
import Header from "./components/Header";
import "~/styles/globals.css";
import type { Metadata } from "next";
import { Toaster } from "./components/Sonner";

export const metadata: Metadata = {
  title: "1783 DAO",
  description: "1783 DAO",
};

const advent = Advent_Pro({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const cookieHeader = await headers();
  const cookies = cookieHeader.get("cookie");

  if (!routing.locales.includes(locale as 'en' | 'zh')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={advent.className}>
        <NextIntlClientProvider messages={messages}>
          <ContextProvider cookies={cookies}>
            <Toaster />
            <Header />
            <main className="pt-[88px]">
              {children}
            </main>
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

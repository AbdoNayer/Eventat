import { Footer, Header } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Noto_Kufi_Arabic } from "next/font/google";
const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['400', '700', '800'], // Specify the font weights you need
  subsets: ['arabic'], // Specify the subsets you need
  display: 'swap', // Optional: control how the font is displayed
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={notoKufiArabic.className}>
        <Header lang={locale} messages={messages} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='min-h-[600px]'>{children}</div>
        </NextIntlClientProvider>
        <Footer lang={locale} />
      </body>
    </html>
  );
}

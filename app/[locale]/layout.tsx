import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>

      <html lang="en">
        <body
          className={inter.className}
        >
          {children}
        </body>
      </html>

    </NextIntlClientProvider>
  );
}

import { MetaDataPublic } from "@/config/metaDataPublic";

import { Inter } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/languageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = MetaDataPublic;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Taipei">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

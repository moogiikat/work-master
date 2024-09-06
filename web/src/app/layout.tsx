import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui";

import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workmaster LLC",
  description:
    "Барилга угсралт, Интерьер зураг төсөл гүйцэтгэл, тавилга үйлдвэрлэл.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="bg-white dark:bg-black">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

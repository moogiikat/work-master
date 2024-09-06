import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui";

import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "@/lib/utils";

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
          <div className="flex h-[100dvh] w-[100dvw] flex-col items-center overflow-auto">
            <div className={cn("sticky top-0 z-10 h-[81px] w-full bg-white")}>
              <Header />
            </div>
            <div className="w-full flex-auto bg-white dark:bg-black">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

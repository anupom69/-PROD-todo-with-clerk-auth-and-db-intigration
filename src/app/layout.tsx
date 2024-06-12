import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
// import { neobrutalism } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Advanced todo app intigrated with live database.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-gradient-to-tr from-black to-slate-900">
        <body className={`${inter.className}`}>
          <Providers>
            <Header />
            <div className=" bg-white container min-h-svh max-w-screen-lg mx-auto border-2">
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

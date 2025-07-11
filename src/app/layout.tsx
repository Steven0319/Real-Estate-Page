import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quickSand = Quicksand({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Real Estate - Steven",
  description:
    "Application created by Steven for academic or practice purposes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${quickSand.className}
          min-h-screen
          bg-gradient-to-tr from-[#e0f7f5] via-[#c2f0ec] to-[#a8e6e1]
          text-gray-900
          antialiased
          selection:bg-secondary selection:text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}

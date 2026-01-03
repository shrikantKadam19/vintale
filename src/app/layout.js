import Header from "@/components/common/header";
import "./globals.css";
import { DM_Sans, Montagu_Slab } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const montaguSlab = Montagu_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montagu-slab",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${montaguSlab.variable}`}>
        {children}
      </body>
    </html>
  );
}

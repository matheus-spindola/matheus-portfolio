import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Matheus Spindola — Product Designer",
  description:
    "The design process is dead and I can prove it. I’m a product designer who’s passionate about creating intuitive and delightful user experiences. With a background in both design and development, I bridge the gap between creativity and functionality to craft products that users love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="business"
      className={`${sora.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-body)]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

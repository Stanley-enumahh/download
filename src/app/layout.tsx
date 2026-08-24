import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Download Tech 2026",
  description:
    "Building the Talent Infrastructure for Africa's Digital Future. Join us on 5th September 2026 at Classic Munich Hotel, Nnewi.",
  keywords: [
    "Download Tech",
    "Download Tech 2026",
    "tech event Nigeria",
    "Nnewi tech summit",
    "Africa digital future",
    "tech conference Anambra",
  ],
  authors: [{ name: "Download Tech" }],
  openGraph: {
    title: "Download Tech 2026",
    description:
      "Building the Talent Infrastructure for Africa's Digital Future. 5th September 2026 — Classic Munich Hotel, Nnewi.",
    url: "https://www.downloadtechevent.com",
    siteName: "Download Tech 2026",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Download Tech 2026 — Building the Talent Infrastructure for Africa's Digital Future",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Tech 2026",
    description:
      "Building the Talent Infrastructure for Africa's Digital Future. 5th September 2026 — Classic Munich Hotel, Nnewi.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://www.downloadtechevent.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex w-full flex-col">
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

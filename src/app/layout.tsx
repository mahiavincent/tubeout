import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TubeOut - Find Content Creators and Influencers for your business",
  description: "Search, rank and contact best content creators to market your products in minutes.",
  keywords: [
    "Youtube creator email finder",
    "influencer outreach",
    "creator marketing",
  ],
  metadataBase: new URL("https://tubeout.vercel.app"),
  openGraph: {
    title: "TubeOut",
    description: "Find and contact content creators and influencers at scale in minutes.",
    url: "https://tubeout.vercel.app",
    siteName: "Tubeout",
    images: [
      "/favicon-light.svg"
    ],
    type: 'website'
  },
  icons: {
    icon: [
      { url: "/favicon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-auto scrollbar-hide antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster></Toaster>
      </body>
    </html>
  );
}

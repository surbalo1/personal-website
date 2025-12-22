import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rafael Gonzalez | Electronics Engineer",
  description:
    "Electronics engineer specializing in embedded systems, hardware-software integration, and field validation. I turn unclear technical problems into working systems.",
  keywords: [
    "Electronics Engineer",
    "Embedded Systems",
    "IoT",
    "Firmware Development",
    "Hardware Integration",
    "MSP430",
    "ESP32",
    "RSL10",
  ],
  authors: [{ name: "Rafael Ignacio Gonzalez Chong" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Rafael Gonzalez | Electronics Engineer",
    description:
      "Electronics engineer specializing in embedded systems, hardware-software integration, and field validation.",
    url: "https://rafael-gonzalez.vercel.app",
    siteName: "Rafael Gonzalez",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rafael Gonzalez - Electronics Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Gonzalez | Electronics Engineer",
    description:
      "Electronics engineer specializing in embedded systems, hardware-software integration, and field validation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

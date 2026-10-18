import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const title = "Rafael Gonzalez | Cloud Solution Architect";
const description =
    "Cloud Solution Architect at Microsoft in Mexico City. Azure and AI, with a background in electronics and embedded systems.";

export const metadata: Metadata = {
    metadataBase: new URL("https://rafael-gonzalez.vercel.app"),
    title,
    description,
    keywords: [
        "Cloud Solution Architect",
        "Microsoft",
        "Azure",
        "AI",
        "Generative AI",
        "IoT",
        "Embedded Systems",
        "Rafael Gonzalez",
    ],
    authors: [{ name: "Rafael Ignacio Gonzalez Chong" }],
    icons: { icon: "/favicon.svg" },
    openGraph: {
        title,
        description,
        url: "/",
        siteName: "Rafael Gonzalez",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/og-image.png"],
    },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
    colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

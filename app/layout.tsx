import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Viewport } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { personalConfig } from "@/config/personalConfig";
import { WelcomeMessage } from "@/components/welcome-message";

const montserratFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat",
});

const robotoFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--roboto",
});

export const metadata = {
  title: "Mateusz Wlekliński - Web Developer",
  description:
    "Frontend Developer with a passion for web development. Explore my projects and blog about coding and tech.",
  keywords: [
    "react web development",
    "javascript for web development",
    "react website development",
    "typescript react",
    "react js typescript",
    "web development",
    "coding",
    "JavaScript",
    "React.js",
    "Typescript",
    "Tailwind",
    "front-end development",
  ],
  authors: {
    name: personalConfig.name,
    url: personalConfig.github,
  },
  robots: "index, follow",
  openGraph: {
    title: "Mateusz Wlekliński - Web Developer",
    description: personalConfig.description,
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
} satisfies Viewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${montserratFont.variable} ${robotoFont.className}`}>
        <Analytics />
        <WelcomeMessage />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

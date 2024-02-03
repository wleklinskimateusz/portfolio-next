import { Nav } from "@/components/Nav";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Socials } from "@/components/Socials";
import { Viewport } from "next";
import { Playfair_Display, Montserrat, Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";

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
    "Junior Frontend Developer with a passion for web development. Explore my projects and blog about coding and tech.",
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
    name: "Mateusz Wlekliński",
    url: "https://github.com/wleklinskimateusz",
  },
  robots: "index, follow",
  openGraph: {
    title: "Mateusz Wlekliński - Web Developer",
    description:
      "Junior Frontend Developer with a passion for web development. Explore my projects and blog about coding and tech.",
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
      <body
        className={`flex min-h-screen flex-col ${montserratFont.variable} ${robotoFont.className}`}
      >
        <Nav />
        {/* <Breadcrumbs /> */}
        <Analytics />
        <main className="flex-1 flex flex-col ">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

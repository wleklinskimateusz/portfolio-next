import { Nav } from "@/components/Nav";
import "./globals.css";
import "@/types/react";
import { Socials } from "@/components/Socials";
import SwitchTheme from "@/components/SwitchTheme";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          data-theme={"wireframe"}
          className="flex min-h-screen flex-col bg-base-200"
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

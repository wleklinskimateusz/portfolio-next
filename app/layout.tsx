import { Nav } from "@/components/Nav";
import "./globals.css";
import "@/types/react";

export const metadata = {
  title: "Mateusz Wlekliński",
  description: "Mateusz Wlekliński's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body className="flex h-screen flex-col bg-base-200">
        <Nav items={["Home", "Projects", "Contact"]} />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

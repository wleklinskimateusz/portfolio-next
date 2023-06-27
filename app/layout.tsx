import "./globals.css";
import "@/types/react";
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
    <html lang="en">
      <body
        data-theme={"wireframe"}
        className="flex min-h-screen flex-col bg-base-200"
      >
        {children}
      </body>
    </html>
  );
}

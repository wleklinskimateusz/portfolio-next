import { Footer } from "@/app/(default)/_components/Footer";
import { Nav } from "@/app/(default)/_components/Nav";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}

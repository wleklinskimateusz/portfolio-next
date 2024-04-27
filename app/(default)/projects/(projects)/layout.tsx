export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
}

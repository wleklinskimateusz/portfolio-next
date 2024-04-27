export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto mt-24 flex grow">{children}</div>;
}

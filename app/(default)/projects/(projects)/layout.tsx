import { ScreenWrapper } from "../../_components/ScreenWrapper";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ScreenWrapper>{children}</ScreenWrapper>;
}

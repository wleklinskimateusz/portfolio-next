import { ContactMe } from "../../_components/ContactMe";
import { ScreenWrapper } from "../../_components/ScreenWrapper";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScreenWrapper className="gap-32 2xl:max-w-screen-lg">
      {children}
      <ContactMe />
    </ScreenWrapper>
  );
}

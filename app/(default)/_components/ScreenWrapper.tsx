import { cn } from "@/lib/utils";

type ScreenWrapperProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export const ScreenWrapper = ({ className, ...rest }: ScreenWrapperProps) => (
  <div
    className={cn(
      "mx-auto flex max-w-md flex-col gap-8 max-[494px]:mx-4 sm:max-w-lg md:max-w-2xl md:gap-16 lg:max-w-4xl 2xl:max-w-screen-2xl",
      className,
    )}
    {...rest}
  />
);

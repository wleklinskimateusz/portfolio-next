import { cn } from "@/lib/utils";

type ScreenWrapperProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export const ScreenWrapper = ({ className, ...rest }: ScreenWrapperProps) => (
  <div
    className={cn(
      "mx-auto flex w-full max-w-md flex-col gap-16 sm:max-w-lg md:max-w-2xl lg:max-w-4xl",
      className,
    )}
    {...rest}
  />
);

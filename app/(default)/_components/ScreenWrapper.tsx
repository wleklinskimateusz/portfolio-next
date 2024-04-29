import { cn } from "@/lib/utils";

type ScreenWrapperProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export const ScreenWrapper = ({ className, ...rest }: ScreenWrapperProps) => (
  <div
    className={cn(
      "mx-4 flex max-w-md flex-col gap-16 sm:mx-auto sm:w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl 2xl:max-w-screen-2xl",
      className,
    )}
    {...rest}
  />
);

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
type RoleElementProps = Omit<
  React.HtmlHTMLAttributes<HTMLLIElement>,
  "children"
> & {
  links?: { label: string; href: string }[];
  title: string;
  responsibilities: string[];
};
export const RoleElement = ({
  className,
  responsibilities,
  title,
  links,
  ...rest
}: RoleElementProps) => {
  return (
    <li
      className={cn(
        " flex flex-col gap-4 rounded bg-slate-50 p-4 text-sm shadow lg:text-center",
        className,
      )}
      {...rest}
    >
      <h3 className="text-primary">{title}</h3>
      <ul className="flex grow flex-col gap-1">
        {responsibilities.map((responsibility) => (
          <Responsibilty key={responsibility}>{responsibility}</Responsibilty>
        ))}
      </ul>

      <LinksFragment links={links} />
    </li>
  );
};

const LinksFragment = ({ links }: Pick<RoleElementProps, "links">) => {
  if (!links) return null;
  return (
    <div className="flex flex-wrap items-center justify-center">
      {links.map((link) => (
        <Link key={link.href} target="_blank" href={link.href}>
          <Button variant={"link"}>{link.label}</Button>
        </Link>
      ))}
    </div>
  );
};

const Responsibilty = ({ children }: { children: string }) => (
  <li className="rounded bg-slate-200 px-4 py-2">{children}</li>
);

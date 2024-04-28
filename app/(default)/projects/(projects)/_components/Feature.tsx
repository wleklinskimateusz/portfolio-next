import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

export const Feature = ({
  title,
  children,
  actions,
}: {
  title: string;
  children: ReactNode;
  actions?: { label: string; href: string }[];
}) => (
  <li>
    <Card className=" flex h-full flex-col border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grow px-0 text-sm">{children}</CardContent>
      <CardFooter className="flex-col gap-1 px-0 sm:flex-row sm:gap-4">
        {actions?.map(({ label, href }) => (
          <Link key={label} href={href}>
            <Button size="sm" variant="secondary">
              {label}
            </Button>
          </Link>
        ))}
      </CardFooter>
    </Card>
  </li>
);

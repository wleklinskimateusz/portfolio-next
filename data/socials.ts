export type Social = {
  name: "Github" | "LinkedIn" | "Facebook" | "Instagram" | "Twitter";
  link: string;
};

export const socials = [
  {
    name: "Github",
    link: "",
  },
] as const satisfies readonly Social[];

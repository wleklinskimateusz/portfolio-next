export type Social = {
  name: "Github" | "LinkedIn" | "Facebook" | "Instagram" | "Twitter";
  link: string;
};

export const socials = [
  {
    name: "Github",
    link: "https://github.com/wleklinskimateusz",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mateusz-wleklinski/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/wleklinskim/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/m_wleklinski/",
  },
] as const satisfies readonly Social[];

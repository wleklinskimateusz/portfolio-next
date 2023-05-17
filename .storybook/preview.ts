import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "transparent",
      values: [
        {
          name: "transparent",
          value: "transparent",
        },
        {
          name: "light",
          value: "#fff",
        },
        {
          name: "dark",
          value: "#000",
        },
      ],
    },
  },
};

export default preview;

import { Meta, StoryObj } from "@storybook/react";
import { FormControl } from "./FormControl";
import { TextInput } from "../TextInput/TextInput";

const meta = {
  title: "Form / FormControl",
  component: FormControl,
} satisfies Meta<typeof FormControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "What is your name?",
    error: "This is an error",
    children: <TextInput />,
  },
  name: "FormControl",
};

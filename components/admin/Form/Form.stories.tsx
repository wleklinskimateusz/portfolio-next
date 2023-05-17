import { Form } from "./Form";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  name: "Form",
};

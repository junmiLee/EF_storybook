import type { Meta, StoryObj } from "@storybook/react";

import InputSecondary from "./components/InputSecondary";

const meta = {
  title: "Input/InputSecondary",
  component: InputSecondary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", description: "input placeholder" },
  },
} satisfies Meta<typeof InputSecondary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
  },
};

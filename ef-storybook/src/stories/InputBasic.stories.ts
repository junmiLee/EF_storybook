import type { Meta, StoryObj } from "@storybook/react";

import InputBasic from "./components/InputBasic";

const meta = {
  title: "Input/InputBasic",
  component: InputBasic,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text", description: "input placeholder" },
  },
} satisfies Meta<typeof InputBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
  },
};

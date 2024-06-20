import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "./components/PrimaryButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["base", "main", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "base",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "icon",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: true,
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: "Button",
    theme: "base",
    disabled: false,
  },
};

export const Main: Story = {
  args: {
    children: "Button",
    theme: "main",
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "base",
    disabled: true,
  },
};

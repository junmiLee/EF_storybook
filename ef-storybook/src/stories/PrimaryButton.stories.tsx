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
        options: ["main", "secondary", "button01"],
      },
      description: "버튼 색상 테마",
      defaultValue: "main",
    },
    themeHoverColor: {
      control: {
        type: "select",
        options: ["mainHover", "secondaryHover", "button01Hover"],
      },
      description: "버튼 호버 색상",
      defaultValue: "mainHover",
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

export const main: Story = {
  args: {
    children: "Button",
    theme: "main",
    themeHoverColor: "mainHover",
    disabled: false,
  },
};

export const secondary: Story = {
  args: {
    children: "Button",
    theme: "secondary",
    themeHoverColor: "secondaryHover",
    disabled: false,
  },
};

export const button01: Story = {
  args: {
    children: "Button",
    theme: "button01",
    themeHoverColor: "button01Hover",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "main",
    themeHoverColor: "mainHover",
    disabled: true,
  },
};

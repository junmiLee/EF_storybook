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
    placeholder: {
      control: "text",
      description: "input placeholder",
      defaultValue: "placeholder",
    },
    bgColor: {
      control: {
        type: "select",
        options: ["white", "inputOff"],
      },
      description: "백그라운드 배경 색깔 선택",
      defaultValue: "white",
    },
    hoverIsChecked: {
      control: { type: "boolean" },
      description: "호버 활성화 여부",
      defaultValue: false,
    },
    type: {
      control: "text",
      description: "input type 지정",
      defaultValue: "email",
    },
  },
} satisfies Meta<typeof InputBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
    bgColor: "white",
    hoverIsChecked: false,
    type: "email",
  },
};

export const secondary: Story = {
  args: {
    placeholder: "placeholder",
    bgColor: "inputOff",
    hoverIsChecked: true,
    type: "password",
  },
};

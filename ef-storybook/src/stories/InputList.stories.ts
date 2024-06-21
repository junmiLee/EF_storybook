import type { Meta, StoryObj } from "@storybook/react";

import InputList from "./components/InputList";
import { fn } from "@storybook/test";

const meta = {
  title: "List/InputList",
  component: InputList,
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
    label: {
      control: "text",
      description: "input label 지정",
      defaultValue: "라벨 이름",
    },
    errorMessage: {
      control: "text",
      description: "에러 메세지 문구",
      defaultValue: "email",
    },
    isError: {
      control: "boolean",
      description: "에러 메세지 활성화 여부",
      defaultValue: true,
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof InputList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "placeholder",
    bgColor: "white",
    hoverIsChecked: false,
    type: "name",
    label: "이름",
    errorMessage: "경고경고",
    isError: false,
  },
};

export const secondary: Story = {
  args: {
    placeholder: "placeholder",
    bgColor: "inputOff",
    hoverIsChecked: true,
    type: "name",
    label: "이름",
    errorMessage: "경고 메세지 입니다.",
    isError: true,
  },
};

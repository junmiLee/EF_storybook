import { ChangeEvent, useState } from "react";
import TagButton from "./TagButton";
import Label from "./Label";
import InputBasic from "./InputBasic";
import ErrorMessage from "./ErrorMessage";

type InputBgColor = "white" | "inputOff";

interface InputListProps {
  errorMessage?: string;
  label: string;
  bgColor: InputBgColor;
  placeholder: string;
  type: string;
  isError?: boolean;
  hoverIsChecked: boolean;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputList({
  errorMessage = "에러메세지",
  placeholder,
  bgColor,
  type,
  label,
  isError,
  hoverIsChecked,
  onChange,
}: InputListProps) {
  return (
    <div>
      <Label>{label}</Label>
      <InputBasic
        placeholder={placeholder}
        bgColor={bgColor}
        hoverIsChecked={hoverIsChecked}
        type={type}
        onChange={onChange}
      ></InputBasic>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

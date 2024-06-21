import classNames from "classnames";
import { ChangeEvent } from "react";

type InputBgColor = "white" | "inputOff";

interface IfInputBasicProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  bgColor: InputBgColor;
  hoverIsChecked: boolean;
  type: string;
}

const white = "bg-white";
const inputOff = "bg-input-off-bg";

const color: Record<InputBgColor, string> = {
  white,
  inputOff,
};
export default function InputBasic({
  placeholder,
  bgColor,
  hoverIsChecked,
  type,
  onChange,
}: IfInputBasicProps) {
  const InputHover = hoverIsChecked
    ? "hover:bg-white hover:border-primary focus:bg-white focus:border-primary "
    : "";
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames(
        "w-full border border-input-line text-primary sm:text-sm rounded-primary-button block p-2.5 outline-none ",
        color[bgColor],
        InputHover
      )}
      required
    />
  );
}

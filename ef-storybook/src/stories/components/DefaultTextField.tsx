import { userEvent } from "@storybook/test";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";
import { useState } from "react";

interface IfDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  errorMessage,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  iconAlt,
  isError,
  id,
}: IfDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="relative text-field">
      <div
        className={`text-primary border-b ${borderColor}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input
          id={id}
          className=" outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

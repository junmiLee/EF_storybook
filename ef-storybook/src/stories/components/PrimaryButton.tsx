import classNames from "classnames";

type PrimaryButtonTheme = "main" | "secondary" | "button01";
type PrimaryHoverButton = "mainHover" | "secondaryHover" | "button01Hover";

interface IfPrimaryButtonProps {
  theme: PrimaryButtonTheme;
  themeHoverColor: PrimaryHoverButton;
  disabled: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const main = "bg-main text-white";
const secondary = "bg-secondary text-white";
const button01 = "bg-button01 text-white";
const disabledStyle = "disabled:bg-mono100 disabled:button01-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  main,
  secondary,
  button01,
};

const colorHover: Record<PrimaryHoverButton, string> = {
  mainHover: "hover:bg-main-hover",
  secondaryHover: "hover:bg-secondary-hover",
  button01Hover: "hover:bg-button01-hover",
};

export default function PrimaryButton({
  theme,
  themeHoverColor,
  children,
  onClick,
  disabled,
}: IfPrimaryButtonProps) {
  return (
    <button
      className={classNames(
        "rounded-primary-button w-full h-[59px] transition-all font-bold",
        color[theme],
        colorHover[themeHoverColor],
        disabledStyle
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

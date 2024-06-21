import classNames from "classnames";

interface IfTagButtonProps {
  children: string;
  onClick: () => void;
  isChecked: boolean;
}

const tagHover = "hover:bg-main";

export default function TagButton({
  children,
  onClick,
  isChecked,
}: IfTagButtonProps) {
  const buttonStyle = isChecked
    ? "text-white bg-main"
    : "bg-white text-primary ";
  return (
    <button
      className={classNames(
        "rounded-tag-button px-[10px] h-[33px] border border-solid border-main text-sm font-medium transition-all",
        tagHover,
        buttonStyle
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

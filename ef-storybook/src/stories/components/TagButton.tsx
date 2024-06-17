interface IfTagButtonProps {
  children: string;
  onClick: () => void;
  isChecked: boolean;
}

export default function TagButton({
  children,
  onClick,
  isChecked,
}: IfTagButtonProps) {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "text-white ba-dark-opacity";
  return (
    <button
      className={`rounded-tag-button px-[10px] h-[33px] border ${buttonStyle} text-sm font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

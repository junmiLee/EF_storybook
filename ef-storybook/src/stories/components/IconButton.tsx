interface IfIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: () => void;
}

export default function IconButton({
  alt,
  iconPath,
  onClick,
}: IfIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
}

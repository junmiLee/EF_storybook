interface IfErrorMessageProps {
  children: string;
}

export default function ErrorMessage({ children }: IfErrorMessageProps) {
  return <p className="text-sm text-error">{children}</p>;
}

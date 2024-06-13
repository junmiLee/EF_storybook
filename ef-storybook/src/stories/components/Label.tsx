interface IfLabelProps {
  htmlFor?: string;
  children?: string;
}

export default function Label({ htmlFor, children }: IfLabelProps) {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

interface IfInputBasicProps {
  placeholder: string;
}

export default function InputBasic({ placeholder }: IfInputBasicProps) {
  return (
    <input
      type="password"
      placeholder={placeholder}
      className="w-full border border-input-line text-gray-900 sm:text-sm rounded-primary-button block p-2.5 outline-none "
      required
    />
  );
}

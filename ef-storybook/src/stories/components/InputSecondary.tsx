import classNames from "classnames";

interface IfInputSecondaryProps {
  placeholder: string;
}

const InputHover =
  "hover:bg-white hover:border-primary focus:bg-white focus:border-primary ";

export default function InputSecondary({ placeholder }: IfInputSecondaryProps) {
  return (
    <input
      type="password"
      placeholder={placeholder}
      className={classNames(
        "w-full border border-input-line bg-input-off-bg text-gray-900 sm:text-sm rounded-primary-button block p-2.5 outline-none ",
        InputHover
      )}
      required
    />
  );
}

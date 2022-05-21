import { useState } from "react";
import type { FC, ChangeEvent } from "react";

interface IInput {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string | string[];
}

export const Input: FC<IInput> = ({
  name,
  placeholder,
  disabled = false,
  className,
}) => {
  const [input, setInput] = useState("");

  return (
    <input
      type="text"
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={input}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
      className={`block w-full rounded border border-solid p-4 text-sm shadow-sm ${className}`}
    />
  );
};

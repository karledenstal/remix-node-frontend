import { useState } from "react";
import type { FC, ChangeEvent } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface IPassword {
  name: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string[] | string;
  showPasswordOption?: boolean;
}

export const Password: FC<IPassword> = ({
  name,
  placeholder,
  disabled = false,
  className,
  showPasswordOption = true,
}) => {
  const [pwd, setPwd] = useState("");
  const [showingPwd, setShowingPwd] = useState(false);

  return (
    <div className="relative">
      <input
        type={showingPwd ? "text" : "password"}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={pwd}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)}
        className={`block w-full rounded border border-solid p-4 text-sm shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-white ${className}`}
      />
      {showPasswordOption && !showingPwd && (
        <IoEyeOffOutline
          onClick={() => setShowingPwd((s) => !s)}
          className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        />
      )}
      {showPasswordOption && showingPwd && (
        <IoEyeOutline
          onClick={() => setShowingPwd((s) => !s)}
          className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
        />
      )}
    </div>
  );
};

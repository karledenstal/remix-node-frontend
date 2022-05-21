import type { FC } from "react";

export const Button: FC = ({ children }) => (
  <button className="rounded bg-indigo-500 text-white p-6 w-full hover:bg-indigo-600">
    {children}
  </button>
);

import type { FC } from 'react';

export const Button: FC = ({ children }) => (
  <button className="shadow-sm uppercase font-bold font-display text-lg tracking-wider rounded bg-indigo-500 text-white p-6 w-full hover:bg-indigo-600 transition-all">
    {children}
  </button>
);

'use client';

import React from 'react';

type Props = {
  setSidebarOpen: (state: boolean) => void;
};

const Navbar = ({ setSidebarOpen }: Props) => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 flex items-center justify-between shadow-md">
      <button
        onClick={() => setSidebarOpen(true)}
        className="text-gray-800 dark:text-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h1 className="text-lg font-bold">My App</h1>
    </header>
  );
};

export default Navbar;

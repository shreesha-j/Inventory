'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

const NoteLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      {/* Note Header */}
      <header className="p-4 bg-blue-200 dark:bg-blue-900 shadow-md">
        <h1 className="text-xl font-bold">Note Page</h1>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="p-4 bg-blue-200 dark:bg-blue-900 text-center">
        &copy; 2024 Note Page Footer
      </footer>
    </div>
  );
};

export default NoteLayout;

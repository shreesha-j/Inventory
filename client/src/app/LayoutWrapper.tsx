'use client';

import React, { useState } from 'react';
import Navbar from './(components)/Navbar';
import Sidebar from './(components)/Sidebar';
import { usePathname } from 'next/navigation';
import NoteLayout from './(components)/NoteLayout';

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

// export default LayoutWrapper;

function LayoutSelect({ children }: { children: React.ReactNode }){
    const pathName = usePathname();
    const Layout = pathName === '/Note' ? NoteLayout : LayoutWrapper;
    return <Layout>{children}</Layout>;

}

export default LayoutSelect
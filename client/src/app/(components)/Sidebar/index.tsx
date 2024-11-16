'use client'

import React, { useState } from 'react'
import Link  from 'next/link'

type Props = {
  sidebarOpen:boolean;
  setSidebarOpen: (state: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const [darkMode,setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <aside className={`fixed top-0 left-0 h-full bg-gray-200 dark:bg-gray-800 p-4 transition-transform ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
        <div className='flex justify-between'>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            My Sidebar
          </h1>
          <button 
          onClick={() => setSidebarOpen(false)}
            className="text-gray-800 dark:text-gray-200 mb-6"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
          <nav>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-700 dark:text-gray-300">
                  Vedios
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-700 dark:text-gray-300">
                  Calender
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Note" className="text-gray-700 dark:text-gray-300">
                  Note
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="mt-6 p-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded"
          >
            Toggle Dark Mode
          </button>
      </aside>
  )
}

export default Sidebar
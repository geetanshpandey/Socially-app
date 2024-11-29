'use client';

import React, { useState } from 'react';
import { Box, Edit, Trash, Link as Lii} from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-100 border-b-[1px] dark:bg-gray-900 dark:border-gray-700 h-16 mb-2 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Box size={40} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MI<span className="text-blue-600">RO</span>
          </span>
        </Link>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                Dropdown
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-gray-700 shadow-lg rounded-md p-1 bg-gray-100">
              <DropdownMenuItem>
                <a href="#" className="flex block px-1 py-1 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 pl-1">
                <Edit size={40} className='mr-2' />Editor
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="flex block px-1 py-1 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 pl-1">
                <Trash size={40} className='mr-2'/>Delete
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" className="flex block px-1 py-1 text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 pl-1">
                <Lii size={2} className='mr-2'/>Copy Link
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen ? 'true' : 'false'}
          onClick={handleDropdownToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
        </div>
        {/* Live Button and Circles */}
        <div className="absolute right-1 transform -translate-y-1/2 flex flex-col items-center space-y-2 -mr-1 -mb-14">
          <button className="bg-gray-800 text-white px-4 py-2 hover:bg-green-600 w-24 h-20 pt-4">Live
          <div className="flex justify-center items-center space-x-2 mt-2">
            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

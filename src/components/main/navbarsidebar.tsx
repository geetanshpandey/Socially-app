'use client';
import React, { useState } from 'react';
import { Plus, Minus, Circle } from 'lucide-react';
import { Box, Star, Grid, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Settings, LayoutDashboard, DollarSign,LogOut } from "lucide-react";
import Link from 'next/link';

const NavbarSidebar: React.FC = () => {
  // State to manage the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // State to manage the sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/" className="flex ms-2 md:me-24">
                <LayoutDashboard size={28} className='sm:mr-2 mr-1' />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Hud<span className='text-blue-600'>dle</span>
                </span>
              </a>
              <form className="max-w-md mx-auto sm:ml-64 ml-8">
                <label 
                  htmlFor="default-search" 
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block sm:w-72 w-32 p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search.."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white md:block hidden absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="flex items-center ms-3">
                  <Link href="/admin">
                  <Button className='mr-2'>
                    Login
                  </Button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSidebar;
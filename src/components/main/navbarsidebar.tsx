'use client';
import React, { useState } from 'react';
import { Plus, Minus, Circle } from 'lucide-react';
import { Box, Star, Grid, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Settings, LayoutDashboard, DollarSign,LogOut } from "lucide-react";

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
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <Box size={40} />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  MI<span className='text-blue-600'>RO</span>
                </span>
              </a>
              <form className="max-w-md mx-auto sm:ml-16 ml-8">
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
                    className="block sm:w-72 w-28 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white md:block hidden absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="flex items-center ms-3">
                  <Button className='mr-6'>
                    Invite
                  </Button>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded={dropdownOpen ? 'true' : 'false'}
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-50 rounded-lg shadow-lg dark:bg-gray-700 z-50">
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <a
                          href="#"
                          className="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <LayoutDashboard size={16} className='mr-2 -ml-2'/>Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <Settings size={16} className='mr-2 -ml-2'/>Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <DollarSign size={16} className='mr-2 -ml-2'/>Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <LogOut size={16} className='mr-2 -ml-2'/>Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Sidebar"
      >
        <div className="flex h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium border-r-[1px] border-solid border-gray-200 -ml-4">
            <li className='mb-20'>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-10"
              >
                <span className="ms-3 -ml-4 pr-2"><Plus size={24} /></span>
              </a>
            </li>
            <li className='pb-20'>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3 -ml-4 pr-2"><Minus size={24} /></span>
              </a>
            </li>
            <li >
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3 -ml-4 pr-2"><Circle size={24} /></span>
              </a>
            </li>
          </ul>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Package size={20} />
                <span className="ms-3">Box</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Grid size={20} />
                <span className="ms-3">Board</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Star size={20} />
                <span className="ms-3">Favourite Board</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavbarSidebar;
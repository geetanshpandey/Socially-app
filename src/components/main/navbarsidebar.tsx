'use client';
import React, { useState } from 'react';
import { Plus, Minus, Menu } from 'lucide-react';
import { Box, Star, Grid, Package } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Settings, LayoutDashboard, DollarSign,LogOut, ChevronDown } from "lucide-react";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const NavbarSidebar: React.FC = () => {
  // State to manage the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // State to manage the sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/" className="flex ms-2 md:me-24">
                <Package size={28} className='sm:mr-2 mr-1' />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  NEX<span className='text-blue-600'>X</span>
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="flex items-center ms-3 hover:cursor-pointer mr-6">
                  <div className="sm:ml-64 ml-1">
                    {/* Dropdown Button */}
                    <button
                      id="dropdownLargeButton"
                      className="sm:ml-88 ml-12 font-normal text-sm text-gray-700 dark:text-gray-400"
                      onClick={toggleDropdown}
                    >
                      <span className='flex text-md font-semibold'>Option<ChevronDown size={20} className='ml-2 mr-8 hover:cursor-pointer' /></span>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div
                        id="dropdownNavbar"
                        className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute"
                      >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                          <li>
                            <Link
                              href="/project"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Project
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/billing"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Billing
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
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
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import NavbarSidebar from "@/components/main/navbarsidebar";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

const FormWithPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      console.log("Current Page:", page);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <div className="mb-8">
        <NavbarSidebar/>
      </div>

      {/* Main Section */}
      <main className="bg-white mt-12">
        <div className="pb-2 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
        <div className="flex justify-between text-center px-6 pt-8 border-t border-gray-100">
        Name
            <div className="space-x-2 -pl-12">
            <Button variant="outline">B</Button>
            <Button variant="outline">B</Button>
            </div>
        </div>
        <div className="-mt-4 pl-6">
            Desc
        </div>
        </div>
        <Card className="min-w-screen mx-auto border-none pt-8 bg-white">
          <CardContent>
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter Name"
                  className="w-60 bg-blue-50"
                  onChange={(e) => console.log("Name:", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="w-60 bg-blue-50"
                  onChange={(e) => console.log("Email:", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium mb-1">
                  Rating
                </label>
                <Input
                  id="rating"
                  placeholder="Enter Rating"
                  className="w-60 bg-blue-50"
                  onChange={(e) => console.log("Rating:", e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Input
                  id="message"
                  placeholder="Enter Message"
                  className="w-60 bg-blue-50"
                  onChange={(e) => console.log("Message:", e.target.value)}
                />
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-40">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
                </Pagination>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FormWithPagination;

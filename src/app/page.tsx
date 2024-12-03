"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { toast } from "sonner"; // Import Sonner components
import Link from "next/link";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

interface Document {
  name: string;
  createdTime: string;
  createdDate: string;
  image: string;
}

const DocumentPage: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const id1 = new Date().toLocaleTimeString();
   

  const addDocument = () => {
    const newDocument: Document = {
      name: "New Document",
      createdTime: new Date().toLocaleTimeString(),
      createdDate: new Date().toLocaleDateString(),
      image: "https://via.placeholder.com/50", // Placeholder image
    };
    setDocuments([...documents, newDocument]);

    // Success notification for document creation
    toast.success("New document created successfully!");
  };

  const deleteDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));

    // Error notification for document deletion
    toast.error("Document deleted.");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavbarSidebar />

      {/* Main Section */}
      <main className="p-6 mt-20">
        <div className="text-center sm:text-5xl text-4xl font-bold">
        <span className={`${caveat.className}`}>Make it <span className="text-blue-700">social!</span></span>
        </div>
        <div className="text-center sm:text-3xl text-2xl mt-4 font-lg text-gray-500">
        <span className={`${caveat.className}`}>Connect, share, and engage with your social community</span>
        </div>
        <div className="flex mt-12 justify-center gap-x-10 text-center">
          <Button className="p-4 bg-gray-800 text-white w-32 hover:bg-gray-600">Get Started</Button>
          <Button className="p-4 bg-blue-600 text-white w-32 hover:bg-blue-500">Try it free</Button>
        </div>
        <div className="flex mt-16 sm:ml-48 ml-16 justify-center border border-gray-300 w-[70%] h-40 rounded-xl">
          <span className="mt-16 text-gray-500">Empty area</span>
        </div>
      </main>
    </div>
  );
};

export default DocumentPage;

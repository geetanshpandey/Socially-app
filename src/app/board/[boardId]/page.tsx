'use client';

import React from 'react';
import Navbar from "@/components/main/navbareditor";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const EditorPage = () => {
  return (
    <div>
        <Navbar></Navbar>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-20 text-white flex flex-col justify-between -ml-6 pl-4 pb-2">
        
        {/* Spacer to push Tools Section to the Center */}
        <div className="flex-1 mb-4 mt-14"></div>

        {/* Tools Section - Centered */}
        <div className="flex flex-col items-center space-y-3 bg-gray-900 py-4 rounded-lg pl-1">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            ▲
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            T
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            ▢
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            ◯
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            ✏️
          </button>
        </div>

        {/* Spacer to push Undo/Redo to the Bottom */}
        <div className="flex-1 mt-16"></div>

        {/* Undo/Redo Section */}
        <div className="py-4 flex flex-col items-center space-y-3 bg-gray-900 rounded-lg pl-1">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            ⟲
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-gray-600 rounded-full hover:bg-gray-500">
            ⟳
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 justify-center bg-white p-4">
        <h1 className="text-5xl font-bold text-center mt-40"><span className={`${caveat.className}`}>Editor</span></h1>
      </div>
    </div>
    </div>
  );
};

export default EditorPage;

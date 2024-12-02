'use client';
import React from "react";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button} from "@/components/ui/button";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
      {/* Navbar */}
      <NavbarSidebar/>

      {/* Hero Section */}
      <main className="flex flex-col items-center gap-12 mt-32">
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl">
          {/* Text and Button */}
          <div className="flex flex-col gap-4 text-center sm:ml-24 ml-1 -mt-8">
            <h2 className="text-4xl sm:text-5xl font-semibold text-blue-600"><span className={`${caveat.className}`}>TEXT</span></h2>
            <h2 className="text-2xl sm:text-3xl font-semibold"><span className={`${caveat.className}`}>Here is your description.</span></h2>
            <Button className="self-center">
              Get Started
            </Button>
          </div>

          {/* Image */}
          <img
            src="/example-image.jpg"
            alt="Example"
            className="w-64 h-64 object-cover rounded-md shadow-lg transition-transform duration-300 hover:scale-105 sm:mr-24 mr-1"
          />
        </section>

        {/* Features Section */}
        <section className="mt-12 w-full max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-10 text-center text-blue-600"><span className={`${caveat.className}`}>Features</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-48 md:h-60"
              >
                <CardHeader className="text-center p-4 text-lg font-semibold group-hover:text-gray-600 dark:group-hover:text-blue-400">
                  Feature {item}
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    This is a description of feature {item}. Click to explore more!
                  </p>
                </CardContent>
                <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
              </Card>
            ))}
          </div>
        </section>
        <section className="mt-12 w-full max-w-4xl mx-auto">
          <div className="flex justify-center text-center">
          <h3 className="text-4xl font-bold mb-10 text-center text-blue-600"><span className={`${caveat.className}`}>Pricing</span></h3>
          </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {[
            {
              title: "Starter",
              description: "Best option for personal use and for your personal project.",
              price: "$29",
            },
            {
              title: "Company",
              description:
                "Relevant for multiple users, extended & premium support.",
              price: "$99",
            },
            {
              title: "Enterprise",
              description:
                "Best for large scale uses and extended redistribution rights.",
              price: "$499",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-blue-50 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-3xl font-semibold"><span className={`${caveat.className}`}>{plan.title}</span></h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-blue-600">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
              </ul>
              <a
                href="#"
                className="text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
               <Button className="bg-blue-600 w-40">
                Get started
              </Button>
              </a>
            </div>
          ))}
        </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;

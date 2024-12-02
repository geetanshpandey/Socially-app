import React from "react";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import NavbarSidebar from "@/components/main/navbarsidebar";
import { Button } from "@/components/ui/button";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <NavbarSidebar/>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 mt-20  sm:text-4xl text-3xl tracking-tight font-extrabold text-gray-800 dark:text-white">
          <span className={`${caveat.className}`}>Designed for your buisness.</span>
          </h2>
          <p className="mb-20 font-semibold text-blue-600 sm:text-2xl text-xl dark:text-gray-400">
          <span className={`${caveat.className}`}>Choose according to you needs!</span>
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {[
            {
              title: "Starter",
              description: "Best option for personal use & for your next project.",
              price: "$29",
              details: [
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 1 developer",
                "Premium support: 6 months",
                "Free updates: 6 months",
              ],
            },
            {
              title: "Company",
              description:
                "Relevant for multiple users, extended & premium support.",
              price: "$99",
              details: [
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 10 developers",
                "Premium support: 24 months",
                "Free updates: 24 months",
              ],
            },
            {
              title: "Enterprise",
              description:
                "Best for large scale uses and extended redistribution rights.",
              price: "$499",
              details: [
                "Individual configuration",
                "No setup, or hidden fees",
                "Team size: 100+ developers",
                "Premium support: 36 months",
                "Free updates: 36 months",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 mx-auto scale-95 max-w-lg text-center text-gray-900 bg-blue-50 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
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
                {plan.details.map((detail, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
              ><Button className="bg-blue-600 w-40">
                Get started
              </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

import React, { useState } from "react";
import logo from '../../assets/Syrian SuperMarket Logo.svg';
import { NavbarItems } from "../../data/NavbarItems";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuAnimationClasses = isOpen
    ? "ease-out duration-300"
    : "ease-in duration-300";

  return (
    <nav className="bg-transparent bg-green-100  ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <a href="#" className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-16 w-36"
              src={logo}
              alt="Workflow"
            />
            <img
              className="hidden lg:block h-16 w-36"
              src={logo}
              alt="Workflow"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {NavbarItems.map((nav,index) => (
                <a
                key={index} 
                  href={nav.url}
                  className="text-gray-600 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {nav.title}
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icons */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* Icon when menu is closed */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* Icon when menu is open */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transform ${menuAnimationClasses} sm:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out`}
        id="mobile-menu"
      >
        <div
          className={`${isOpen ? "block" : "hidden"} px-2 pt-2 pb-3 space-y-1`}
        >
          {/* Navigation links */}
          {NavbarItems.map((nav,index) => (
            <a
            key={index}
              href={nav.url}
              className="bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              {nav.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

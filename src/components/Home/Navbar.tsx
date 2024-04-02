import { useState } from "react";
import logo from "../../assets/Syrian SuperMarket Logo.svg";
import { NavbarItems } from "../../data/NavbarItems";
import { useGlobalContext } from "../../context/language";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { mode, toggleMode } = useGlobalContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuAnimationClasses = isOpen
    ? "ease-out duration-300"
    : "ease-in duration-300";

  return (
    <nav className="bg-transparent bg-green-100 text-neutral-600   ">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <img className="h-12 w-auto" src={logo} alt="Workflow" />
        </a>

        <div className="hidden sm:flex items-center space-x-4 ">
          {NavbarItems.map((nav, index) => (
            <Link
              key={index}
              to={nav.url}
              className={`text-sm font-medium px-3 py-2 rounded-md hover:bg-green-700 hover:text-white text-2xl${
                mode === "Arabic" && "ml-4"
              }`}
            >
              {mode === "Eng" ? nav.title : nav.titleArab}
            </Link>
          ))}

          <div className="ml-4">
            <select
              onChange={toggleMode}
              value={mode}
              className="bg-green-50 border border-gray-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="Eng">English</option>
              <option value="Arabic">عربي</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-gray-400 hover:text-white hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden ${menuAnimationClasses} ${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-3 space-y-1`}
      >
        {NavbarItems.map((nav, index) => (
          <Link
            key={index}
            to={nav.url}
            className="block px-3 py-2 rounded-md text-base font-medium bg-green-700 text-white"
          >
            {mode === "Eng" ? nav.title : nav.titleArab}
          </Link>
        ))}
        <select
          onChange={toggleMode}
          value={mode}
          className="block px-3 py-2  text-base font-medium bg-green-700 text-white border border-gray-300   rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="Eng">English</option>
          <option value="Arabic">عربي</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;

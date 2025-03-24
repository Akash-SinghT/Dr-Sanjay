// Required for interactivity (e.g., useState, useEffect)

import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu on mobile after clicking a link
  };

  return (
    <nav className="p-4 fixed w-full top-0 z-50 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold ml-2 md:ml-8">Dr. Sanjay Gambhir</h1>

        {/* Hamburger Menu (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Nav Links (Desktop and Medium Screens) */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#about"
            onClick={() => handleSmoothScroll("Home")}
            className="hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => handleSmoothScroll("about")}
            className="hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="#research"
            onClick={() => handleSmoothScroll("research")}
            className="hover:text-blue-400"
          >
            Research
          </Link>
          <Link
            href="#achievements"
            onClick={() => handleSmoothScroll("Academic")}
            className="hover:text-blue-400"
          >
            Academic
          </Link>
          <Link
            href="#achievements"
            onClick={() => handleSmoothScroll("leadership")}
            className="hover:text-blue-400"
          >
            Leadership
          </Link>
          <Link
            href="#achievements"
            onClick={() => handleSmoothScroll("Honors")}
            className="hover:text-blue-400"
          >
            Honors
          </Link>
          <Link
            href="#contact"
            onClick={() => handleSmoothScroll("contact")}
            className="hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 mt-4">
          <Link
            href="#about"
            onClick={() => handleSmoothScroll("about")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => handleSmoothScroll("about")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            About
          </Link>
          <Link
            href="#research"
            onClick={() => handleSmoothScroll("research")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            Research
          </Link>
          <Link
            href="#achievements"
            onClick={() => handleSmoothScroll("academic")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            Academic
          </Link>
          <Link
            href="#research"
            onClick={() => handleSmoothScroll("research")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            Leadership
          </Link>
          <Link
            href="#research"
            onClick={() => handleSmoothScroll("research")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            Honors
          </Link>
          <Link
            href="#contact"
            onClick={() => handleSmoothScroll("contact")}
            className="block px-4 py-2 hover:bg-gray-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

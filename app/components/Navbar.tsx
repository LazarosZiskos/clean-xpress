"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  playfairFont: string;
}

const Navbar = ({ playfairFont }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Αρχική", to: "hero" },
    { name: "Σχετικά", to: "about" },
    { name: "Υπηρεσίες", to: "services" },
    { name: "Κριτικές", to: "testimonials" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className={`text-2xl font-bold text-brand cursor-pointer ${playfairFont}`}
            >
              Clean Xpress
            </ScrollLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
              >
                {item.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="bg-brand text-white px-6 py-2 rounded-full font-medium hover:bg-brand-dark transition-colors cursor-pointer shadow-md hover:shadow-lg"
            >
              Επικοινωνήστε μαζί μας
            </ScrollLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:text-brand block px-3 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="bg-brand text-white block px-4 py-2 rounded-full font-medium hover:bg-brand-dark transition-colors cursor-pointer shadow-md hover:shadow-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Επικοινωνήστε μαζί μας
            </ScrollLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

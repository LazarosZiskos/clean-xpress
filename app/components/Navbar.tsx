"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../i18n/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: t("home"), to: "hero" },
    { name: t("about"), to: "about" },
    { name: t("services"), to: "services" },
    { name: t("testimonials"), to: "testimonials" },
    { name: t("contact"), to: "contact" },
  ];

  const languages = [
    { code: "el", label: "Ελληνικά" },
    { code: "en", label: "English" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsLanguageOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-brand font-poppins tracking-tight">
              Clean Xpress
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
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
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium cursor-pointer transition-colors"
                  aria-label="Language selector"
                >
                  <GlobeAltIcon className="h-5 w-5" />
                  <span>{locale.toUpperCase()}</span>
                </button>
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none transform opacity-100 scale-100 transition ease-out duration-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`${
                          locale === lang.code
                            ? "bg-brand-50 text-brand"
                            : "text-gray-700"
                        } group flex w-full items-center px-4 py-2 text-sm hover:bg-brand-50 transition-colors`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
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
            <div className="relative">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`${
                    locale === lang.code ? "text-brand" : "text-gray-600"
                  } flex items-center w-full px-3 py-2 text-base font-medium hover:text-brand transition-colors`}
                >
                  <GlobeAltIcon className="h-5 w-5 mr-2" />
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

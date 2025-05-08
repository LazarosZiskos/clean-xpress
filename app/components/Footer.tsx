"use client";

import { Link as ScrollLink } from "react-scroll";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  const navigation = {
    company: [
      { name: "Σχετικά", to: "about" },
      { name: "Υπηρεσίες", to: "services" },
      { name: "Κριτικές", to: "testimonials" },
      { name: "Επικοινωνία", to: "contact" },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Clean Xpress</h3>
            <p className="text-gray-400">
              Επαγγελματικές υπηρεσίες καθαρισμού στην Ελλάδα. Κάνουμε τον χώρο
              σας να λάμπει από το 2010.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Πλοήγηση</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-gray-400 hover:text-brand-300 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Επικοινωνία
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Κεντρική Οδός 123</li>
              <li>Αθήνα, Ελλάδα</li>
              <li>+30 210 1234567</li>
              <li>info@Clean Xpress.gr</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Ακολουθήστε μας
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-300 transition-colors"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-300 transition-colors"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Clean Xpress. Με επιφύλαξη παντός
            δικαιώματος.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

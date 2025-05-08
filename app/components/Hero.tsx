"use client";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-brand-50 pt-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Επαγγελματικές Υπηρεσίες Καθαρισμού{" "}
              <span className="text-brand block mt-2">στην Ελλάδα</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Παρέχουμε υπηρεσίες καθαρισμού υψηλής ποιότητας για σπίτια,
              γραφεία και εμπορικούς χώρους
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark transition-colors cursor-pointer shadow-md hover:shadow-lg"
              >
                Επικοινωνήστε μαζί μας
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="bg-white text-brand px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors cursor-pointer border border-brand shadow-md hover:shadow-lg"
              >
                Δείτε τις Υπηρεσίες μας
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/cleaning1.jpg"
              alt="Business in Greece"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      name: t("clients.maria.name"),
      role: t("clients.maria.role"),
      image: "/testimonials/maria.jpg",
      content: t("clients.maria.content"),
      rating: 5,
    },
    {
      name: t("clients.george.name"),
      role: t("clients.george.role"),
      image: "/testimonials/george.jpg",
      content: t("clients.george.content"),
      rating: 5,
    },
    {
      name: t("clients.elena.name"),
      role: t("clients.elena.role"),
      image: "/testimonials/elena.jpg",
      content: t("clients.elena.content"),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-50/50 rounded-lg p-6 hover:bg-brand-50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

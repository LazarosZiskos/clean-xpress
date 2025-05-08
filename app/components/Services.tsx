"use client";

import { motion } from "framer-motion";
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  const services = [
    {
      icon: HomeIcon,
      title: t("residential.title"),
      description: t("residential.description"),
      features: t("residential.features").split(","),
    },
    {
      icon: BuildingOfficeIcon,
      title: t("commercial.title"),
      description: t("commercial.description"),
      features: t("commercial.features").split(","),
    },
    {
      icon: SparklesIcon,
      title: t("specialized.title"),
      description: t("specialized.description"),
      features: t("specialized.features").split(","),
    },
    {
      icon: TruckIcon,
      title: t("industrial.title"),
      description: t("industrial.description"),
      features: t("industrial.features").split(","),
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-50">
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-brand mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <span className="h-1 w-1 bg-brand rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

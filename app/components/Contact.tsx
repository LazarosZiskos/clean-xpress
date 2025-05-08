"use client";

import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslations } from "next-intl";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const t = useTranslations("contact");

  const schema = yup
    .object({
      name: yup.string().required(t("form.name.error")),
      email: yup
        .string()
        .email(t("form.email.invalid"))
        .required(t("form.email.error")),
      phone: yup.string().required(t("form.phone.error")),
      message: yup.string().required(t("form.message.error")),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the form data to your backend
    console.log(data);
    alert(t("success"));
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: t("info.phone.title"),
      content: t("info.phone.content"),
      link: "tel:+302101234567",
    },
    {
      icon: EnvelopeIcon,
      title: t("info.email.title"),
      content: t("info.email.content"),
      link: "mailto:info@cleanpro.gr",
    },
    {
      icon: MapPinIcon,
      title: t("info.location.title"),
      content: t("info.location.content"),
      link: "https://goo.gl/maps/athens",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-50">
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.name.label")}
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder={t("form.name.placeholder")}
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.email.label")}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder={t("form.email.placeholder")}
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.phone.label")}
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  placeholder={t("form.phone.placeholder")}
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("form.message.label")}
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  placeholder={t("form.message.placeholder")}
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors shadow-sm hover:shadow-md text-sm"
              >
                {t("form.submit")}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6 sm:p-8"
          >
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-brand" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h4>
                    <a
                      href={item.link}
                      className="text-base text-gray-600 hover:text-brand transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

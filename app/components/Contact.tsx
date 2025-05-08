"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Επικοινωνήστε μαζί μας
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Έτοιμοι να βιώσετε την καλύτερη υπηρεσία καθαρισμού στην Ελλάδα;
            Επικοινωνήστε μαζί μας σήμερα!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Όνομα
                </label>
                <input
                  {...register("name", {
                    required: "Το όνομα είναι υποχρεωτικό",
                  })}
                  type="text"
                  id="name"
                  placeholder="Το όνομά σας"
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message as string}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Το email είναι υποχρεωτικό",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Μη έγκυρη διεύθυνση email",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="Το email σας"
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Τηλέφωνο
                </label>
                <input
                  {...register("phone", {
                    required: "Το τηλέφωνο είναι υποχρεωτικό",
                  })}
                  type="tel"
                  id="phone"
                  placeholder="Το τηλέφωνό σας"
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message as string}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Μήνυμα
                </label>
                <textarea
                  {...register("message", {
                    required: "Το μήνυμα είναι υποχρεωτικό",
                  })}
                  id="message"
                  rows={4}
                  placeholder="Το μήνυμά σας"
                  className={`block w-full rounded-md shadow-sm text-sm ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-brand focus:ring-brand"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message as string}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand-600 transition-colors"
              >
                Αποστολή Μηνύματος
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Πληροφορίες Επικοινωνίας
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-brand mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Τηλέφωνο
                    </h4>
                    <p className="text-gray-600">+30 210 1234567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-brand mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@Clean Xpress.gr</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-brand mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Τοποθεσία
                    </h4>
                    <p className="text-gray-600">Αθήνα, Ελλάδα</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Ωράριο Λειτουργίας
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Δευτέρα - Παρασκευή: 8:00 - 20:00
                </p>
                <p className="text-gray-600">Σάββατο: 9:00 - 17:00</p>
                <p className="text-gray-600">Κυριακή: Κλειστά</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

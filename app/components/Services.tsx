"use client";

import { motion } from "framer-motion";
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Καθαρισμός Κατοικιών",
      description:
        "Ολοκληρωμένες υπηρεσίες καθαρισμού σπιτιού, συμπεριλαμβανομένης της τακτικής συντήρησης, του βαθύ καθαρισμού και του καθαρισμού εισόδου/εξόδου.",
      features: [
        "Βαθύς καθαρισμός",
        "Τακτική συντήρηση",
        "Καθαρισμός παραθύρων",
        "Καθαρισμός χαλιών",
      ],
    },
    {
      icon: BuildingOfficeIcon,
      title: "Καθαρισμός Επαγγελματικών Χώρων",
      description:
        "Επαγγελματικές λύσεις καθαρισμού για γραφεία, καταστήματα και εμπορικούς χώρους για τη διατήρηση ενός άψογου εργασιακού περιβάλλοντος.",
      features: [
        "Καθαρισμός γραφείων",
        "Εμπορικοί χώροι",
        "Κοινόχρηστοι χώροι",
        "Απολύμανση τουαλετών",
      ],
    },
    {
      icon: SparklesIcon,
      title: "Εξειδικευμένος Καθαρισμός",
      description:
        "Εξειδικευμένες υπηρεσίες καθαρισμού για συγκεκριμένες ανάγκες, συμπεριλαμβανομένου του καθαρισμού μετά την κατασκευή και του καθαρισμού εκδηλώσεων.",
      features: [
        "Μετά την κατασκευή",
        "Καθαρισμός εκδηλώσεων",
        "Απολύμανση",
        "Πλύσιμο με πίεση",
      ],
    },
    {
      icon: TruckIcon,
      title: "Βιομηχανικός Καθαρισμός",
      description:
        "Υπηρεσίες βαρέως τύπου καθαρισμού για βιομηχανικές εγκαταστάσεις και αποθήκες με αυστηρά πρότυπα ασφάλειας και ποιότητας.",
      features: [
        "Καθαρισμός αποθηκών",
        "Βιομηχανικά δάπεδα",
        "Καθαρισμός εξοπλισμού",
        "Συμμόρφωση ασφαλείας",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Προσφέρουμε ένα ευρύ φάσμα επαγγελματικών υπηρεσιών καθαρισμού για
            να καλύψουμε όλες τις ανάγκες σας
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-brand mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <CheckCircleIcon className="h-5 w-5 text-brand mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const About = () => {
  const features = [
    {
      title: "Έμπειρη Ομάδα",
      description:
        "Οι επαγγελματίες καθαριστές μας έχουν χρόνια εμπειρίας τόσο σε οικιακό όσο και σε επαγγελματικό καθαρισμό.",
    },
    {
      title: "Οικολογικά Προϊόντα",
      description:
        "Χρησιμοποιούμε οικολογικά προϊόντα καθαρισμού που είναι ασφαλή για την οικογένεια και τα κατοικίδιά σας.",
    },
    {
      title: "Εξατομικευμένη Υπηρεσία",
      description:
        "Κάθε πρόγραμμα καθαρισμού προσαρμόζεται στις συγκεκριμένες ανάγκες και προτιμήσεις σας.",
    },
    {
      title: "Αξιόπιστοι & Έμπιστοι",
      description:
        "Η ομάδα μας είναι πλήρως ελεγμένη, ασφαλισμένη και αφοσιωμένη στη διατήρηση της ιδιωτικότητας και της ασφάλειάς σας.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Γιατί να Επιλέξετε την Clean Xpress;
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Με πάνω από μια δεκαετία εμπειρίας στις επαγγελματικές υπηρεσίες
            καθαρισμού, είμαστε υπερήφανοι που προσφέρουμε εξαιρετικά
            αποτελέσματα που ξεπερνούν τις προσδοκίες.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-brand mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

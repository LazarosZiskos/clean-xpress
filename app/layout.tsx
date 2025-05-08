import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Επαγγελματικές Υπηρεσίες Καθαρισμού",
  description:
    "Παρέχουμε υπηρεσίες καθαρισμού υψηλής ποιότητας για σπίτια, γραφεία και εμπορικούς χώρους",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar playfairFont={playfair.className} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

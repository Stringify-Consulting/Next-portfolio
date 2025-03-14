"use client";

import './globals.css'; // Import global styles
import '../dist/output.css'; 
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Bruno_Ace } from "next/font/google";

const brunoAce = Bruno_Ace({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Current route path

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname} // Animate based on route change
            initial={{ opacity: 0, x: -100 }} // Page enters from left
            animate={{ opacity: 1, x: 0 }} // Smoothly appears in place
            exit={{ opacity: 0, x: 100 }} // Page exits to right
            transition={{ duration: 0.5 }} // Speed of the animation
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

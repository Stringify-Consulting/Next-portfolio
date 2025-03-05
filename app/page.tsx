"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center text-2xl font-bold p-6"
    >
      Welcome to My Next.js App with TypeScript & Framer Motion!
    </motion.div>
  );
}

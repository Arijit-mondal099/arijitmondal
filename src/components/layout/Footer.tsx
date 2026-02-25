"use client";

import { PERSONAL_INFO } from "@/lib/constants";
import { motion } from "motion/react"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.5 }} 
        className="text-center text-sm text-muted-foreground py-10"
      >
        Design & Developed by {PERSONAL_INFO.name} © {currentYear}. All rights
        reserved.
      </motion.div>
    </footer>
  );
}

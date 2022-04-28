import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-section"
      initial={{ opacity: 0, transition: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1> About!</h1>
    </motion.div>
  );
}

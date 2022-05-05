import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact-section"
      initial={{ opacity: 0, transition: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1> Contact Section</h1>
    </motion.div>
  );
}

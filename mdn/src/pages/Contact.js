import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Contact.css";
import Form from "../components/Contact/Form";
import Ubication from "../components/Contact/Ubication";

export default function Contact() {
  return (
    <motion.div
      className="container contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row form-section">
        <h2> Contacto</h2>
        <Form />
        <Ubication />
      </div>
    </motion.div>
  );
}

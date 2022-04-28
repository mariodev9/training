import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Horarios.css";

export default function Horarios() {
  return (
    <motion.div
      className="hours"
      initial={{ opacity: 0, transition: 1 }}
      animate={{ opacity: 1 }}
    >
      <h1>Horarios</h1>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Horarios.css";
import Schedule from "../components/Schedule";

export default function Horarios() {
  return (
    <motion.div
      className="container hours"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h1>Horarios</motion.h1>
      <Schedule />
    </motion.div>
  );
}

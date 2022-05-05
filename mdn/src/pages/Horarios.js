import React from "react";
import { motion } from "framer-motion";
import "../assets/css/Horarios.css";
import Schedule from "../components/Schedule";

export default function Horarios() {
  return (
    <motion.div
      className="container hours"
      initial={{ opacity: 0, transition: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1>Horarios</motion.h1>
      <Schedule />
    </motion.div>
  );
}

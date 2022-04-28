import React from "react";
import "../assets/css/Home.css";
import { motion } from "framer-motion";

export default function Home() {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, transition: 1 }}
      animate={{ opacity: 1 }}
      exit={{ x: window.innerWidth, transition: 0.3 }}
    >
      <div className="row">
        <div className="col-md-6 banner">
          <h1>Entrená</h1>
          <h1>Mejorá</h1>
          <h1>Competí</h1>
        </div>
        <div className="col-md-6 home2"></div>
      </div>
    </motion.div>
  );
}

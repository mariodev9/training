import React from "react";
import { motion } from "framer-motion";
import athlete from "../../assets/static/athlete.png";

export default function AthleteImg() {
  return (
    <motion.img
      className="athlete-image"
      src={athlete}
      alt=""
      // FALTA INITIAL
      animate={{
        x: [300, 0],
        opacity: [0, 1],
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        },
      }}
    />
  );
}

import React from "react";
import { motion } from "framer-motion";
import teacher from "../../assets/static/teacher.png";

export default function Teacher({ variants }) {
  return (
    <motion.div className="col-lg-6" variants={variants}>
      <motion.div className="teacher" whileTap={{ scale: 1.1 }}>
        <img src={teacher} alt="" />
      </motion.div>
      <h2>Pepe</h2>
    </motion.div>
  );
}

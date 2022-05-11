import React from "react";
import { motion } from "framer-motion";
import "../assets/css/About.css";
import Teacher from "../components/About/Teacher";
// import imagenes de profesores y pasar como props

export default function About() {
  const list = {
    hidden: { opacity: 0.1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
    },
  };

  return (
    <section>
      <motion.div
        className="container"
        initial={{ opacity: 0, transition: 1, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="row"
          variants={list}
          initial="hidden"
          whileInView="show"
        >
          <div className="col-md-4 description">
            <motion.h2 variants={child}>Hola, somos MDN.</motion.h2>
            <motion.p variants={child}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              harum nihil minus quae nam placeat dicta maiores ullam
              perspiciatis obcaecati sit animi nostrum quisquam repudiandae
              eaque illum, sed, blanditiis cumque.
            </motion.p>
          </div>
          <div className="col-md-8 teachers-container">
            <motion.div className="row">
              <Teacher variants={child} />
              <Teacher variants={child} />
            </motion.div>
          </div>
        </motion.div>
        <div className="teacher"></div>
      </motion.div>
    </section>
  );
}

import React from "react";
import "../assets/css/Home.css";
import { motion } from "framer-motion";
import atlhete from "../assets/static/Atlhete.png";
import Training from "../components/Training";
import Button from "../components/Button/Button";

export default function Home() {
  const letterAnimation = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0, transition: 1 }}
        animate={{ opacity: 1 }}
        exit={{ x: window.innerWidth, transition: 0.3 }}
      >
        {/* COMPONENT HEADER */}
        <header>
          <div className="row">
            <motion.div
              className="col-md-8 banner"
              variants={letterAnimation}
              initial="initial"
              animate="animate"
            >
              <div className="gradient">
                <h1>Forma parte de MDN</h1>
                <h1>Sé un atleta</h1>
              </div>
              <Button />
            </motion.div>
            <div className="col-md-4 athlete-container">
              <motion.img
                className="athlete-image"
                src={atlhete}
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
            </div>
          </div>
        </header>
        <Training />
      </motion.div>
    </>
  );
}

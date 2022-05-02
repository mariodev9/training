import React from "react";
import "../assets/css/Home.css";
import { motion } from "framer-motion";
import Categories from "../components/Home/Categories";
import Button from "../components/Home/Button/Button";
import AthleteImg from "../components/Home/AthleteImg";

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
              <AthleteImg />
            </div>
          </div>
        </header>
        <Categories />
      </motion.div>
    </>
  );
}

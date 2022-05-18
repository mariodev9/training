import React from "react";
import { motion } from "framer-motion";
import Button from "./common/Button/Button";
import AthleteImg from "./Home/AthleteImg";
import { Link } from "react-router-dom";
export default function Header() {
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
        duration: 1.7,
      },
    },
  };
  return (
    <header>
      <div className="row">
        <motion.div
          className="col-md-8 banner"
          variants={letterAnimation}
          initial="initial"
          animate="animate"
        >
          <div className="gradient">
            <h1>Formá parte de MDN</h1>
            <h1>Viví mejor</h1>
          </div>
          <Link to="/About">
            <Button msg="Conocenos" />
          </Link>
        </motion.div>
        <div className="col-md-4 athlete-container">
          <AthleteImg />
        </div>
      </div>
    </header>
  );
}

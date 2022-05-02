import React from "react";
import { motion } from "framer-motion";
import "../assets/css/About.css";

export default function About() {
  return (
    <section>
      <motion.div
        className="container"
        initial={{ opacity: 0, transition: 1, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="row">
          <div className="col-md-4 description">
            <h2>Hola, somos MDN.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              harum nihil minus quae nam placeat dicta maiores ullam
              perspiciatis obcaecati sit animi nostrum quisquam repudiandae
              eaque illum, sed, blanditiis cumque.
            </p>
          </div>
          <div className="col-md-8 teacher-container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="teacher"></div>
              </div>
              <div className="col-md-6 ">
                <div className="teacher"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="teacher"></div>
      </motion.div>
    </section>
  );
}

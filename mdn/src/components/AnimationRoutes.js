import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Horarios from "../pages/Horarios";
import Training from "../pages/Training";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimationRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Entrenamientos" element={<Training />} />
        <Route path="/Horarios" element={<Horarios />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

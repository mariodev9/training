import "../assets/css/Home.css";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Choice from "../components/Home/Choice";

export default function Home() {
  return (
    <>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
      </motion.div>
      <Choice />
    </>
  );
}

import { motion } from "framer-motion";
import Categories from "../components/Training/Categories";

export default function Training() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, transition: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Categories />
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress.js";

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 h-[2px] bg-neon"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};

export default ScrollProgress;

import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { ComponentType } from "react";

const SectionWrapper = (Component: ComponentType, idName: string) => {
  return () => (
    <motion.section
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      variants={staggerContainer()}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );
};

export default SectionWrapper;

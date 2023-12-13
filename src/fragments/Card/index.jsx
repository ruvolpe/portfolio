import "./styles.css";
import { motion } from "framer-motion";
import "./styles.css";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export function Card({ title, url, img, techs }) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        <a href={url}>{title}</a>
        <p className="projects-techs">{techs}</p>
        <img className="projects-img" src={img} alt="" />
      </motion.div>
    </motion.div>
  );
}

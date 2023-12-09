import { FC, memo } from "react";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import Carousel from "../../components/Carousel/Carousel";
import useTitle from "../../hooks/useTitle";
import "./works.scss";

const Works: FC = () => {
  useTitle("Works");

  return (
    <motion.div
      className="works"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Carousel />
    </motion.div>
  );
};

export default memo(Works);

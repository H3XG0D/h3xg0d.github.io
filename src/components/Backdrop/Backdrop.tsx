import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import "./backdrop.scss";

export interface IBackdropProps {
  onClick: () => void;
}

const Backdrop: FC<PropsWithChildren<IBackdropProps>> = (props) => {
  const { children, onClick } = props;
  return (
    <motion.div
      className="backdrop"
      onClick={() => onClick()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;

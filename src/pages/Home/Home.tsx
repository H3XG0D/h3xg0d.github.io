import { FC, memo, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  buttonsAnimation,
  textAnimation,
  containerAnimation,
} from "../../animations";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Modal from "../../components/Modal/Modal";
import "./home.scss";

const Home: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useTitle("Home");

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleResume = useCallback(() => {
    if (isMobile) {
      const link = document.createElement("a");
      link.href = "./data/1.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setModalOpen((prev) => !prev);
    }
  }, [isMobile]);

  return (
    <>
      <motion.div
        className="home"
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="home__text">
          <motion.p
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hello,
          </motion.p>
          <motion.p
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I’m Sivtsev Ivan.
          </motion.p>
          <motion.p
            variants={textAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0 }}
          >
            Frontend Developer
          </motion.p>
        </div>
        <div className="home__buttons">
          <motion.div
            className="home__buttons__wrapper"
            variants={buttonsAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to={"/works"}>
              <button className="home__buttons__button" id="works">
                My Works
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="home__buttons__wrapper"
            variants={buttonsAnimation}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button
              className="home__buttons__button"
              id="resume"
              onClick={() => handleResume()}
            >
              {isMobile ? "Get Resume" : "Open Resume"}
            </button>
          </motion.div>
        </div>
        <AnimatePresence exitBeforeEnter initial={false}>
          {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default memo(Home);

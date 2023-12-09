import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { modalAnimation } from "../../animations";
import IconDownload from "../../icons/Download";
import "./modal.scss";
import { Dispatch, FC, SetStateAction } from "react";

export interface IModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "./data/1.pdf";
  link.setAttribute("download", `.pdf`);
  document.body.appendChild(link);
  link.click();
  link.parentNode?.removeChild(link);
};

const Modal: FC<IModalProps> = (props) => {
  const { setModalOpen } = props;

  return (
    <Backdrop onClick={() => setModalOpen(false)}>
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal__download" onClick={() => downloadResume()}>
          <IconDownload width={40} height={40} />
        </div>
        <iframe
          className="modal__resume"
          title="resume"
          src={`./data/1.pdf#toolbar=0&navpanes=0&scrollbar=0&scrolling=0&view=fitH`}
          frameBorder="0"
          scrolling="no"
        />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;

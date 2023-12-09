import { FC, memo } from "react";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import data from "../../data/about.json";
import useTitle from "../../hooks/useTitle";
import { IAboutItem } from "../../models/AboutModel";
import "./about.scss";

const AboutElement: FC<{ item: IAboutItem }> = ({ item }) => (
  <div
    className={`about__element ${item.tags.length ? "withTags" : ""}`}
    id={item.id}
  >
    <div className="about__element__title">{item.title}</div>
    <div className="about__element__content">
      {item.tags.length > 0 ? (
        <ul>
          {item.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : (
        <p>{item.content}</p>
      )}
    </div>
  </div>
);

const About: FC = () => {
  const about = data as IAboutItem[];
  useTitle("About");

  return (
    <motion.div
      className="about"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {about.map((item) => (
        <AboutElement key={item.id} item={item} />
      ))}
    </motion.div>
  );
};

export default memo(About);

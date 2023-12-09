import { FC, memo } from "react";
import { motion } from "framer-motion";
import { containerAnimation } from "../../animations";
import useTitle from "../../hooks/useTitle";
import data from "../../data/contacts.json";
import { IContactItem } from "../../models/ContactModel";
import { socialIcons } from "../../constants/socials";
import "./contact.scss";

interface ContactIconProps {
  icon: keyof typeof socialIcons;
  link: string;
  id: string;
}

const ContactIcon: FC<ContactIconProps> = ({ icon, link, id }) => {
  const Icon = socialIcons[icon];
  return (
    <a href={link} target="_blank" rel="noreferrer" key={id}>
      <div className="contact__icon" id={icon}>
        <Icon width={80} height={80} />
      </div>
    </a>
  );
};

const Contact: FC = () => {
  const contacts = data as IContactItem[];
  useTitle("Contact");

  return (
    <motion.div
      className="contact"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="contact__content">
        {contacts.length > 0 &&
          contacts.map((item) => (
            <ContactIcon
              key={String(item.id)}
              icon={item.icon}
              link={item.link}
              id={String(item.id)}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default memo(Contact);

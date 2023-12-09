import { FC } from "react";

interface IIconArrowProps {
  className: string;
  onClick: () => void;
  direction: "left" | "right";
}

const IconArrow: FC<IIconArrowProps> = (props) => {
  const { className, onClick, direction } = props;
  switch (direction) {
    case "left":
      return (
        <svg
          className={className}
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      );
    case "right":
      return (
        <svg
          className={className}
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      );
    default:
      return null;
  }
};

export default IconArrow;

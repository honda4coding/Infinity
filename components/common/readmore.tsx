// ReadMoreButton.js
import React from "react";
import styles from "./readmore.module.scss";

interface ButtonProps {
  onClick: () => void;
  text: string; // New prop for customizable text
  size?: string; // New prop for customizable size (optional)
}

const Button: React.FC<ButtonProps> = ({ onClick, text, size = "2em" }) => {
  const buttonStyle = {
    fontSize: size,
  };

  return (
    <button style={buttonStyle} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

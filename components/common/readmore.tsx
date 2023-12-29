// ReadMoreButton.js
import React from "react";
import styles from "./readmore.module.scss";
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  size?: string;
  link?: string;
  cursorPointer?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  size = "2em",
  link,
  cursorPointer = false,
}) => {
  const buttonStyle = {
    fontSize: size,
    cursor: cursorPointer && link ? "pointer" : "auto",
  };

  const handleClick = () => {
    // Only call onClick if a link is present
    if (link) {
      onClick?.();
    }
  };

  const ButtonElement = link ? (
    <Link href={link}>
      <div style={buttonStyle} className={styles.button} onClick={handleClick}>
        {text}
      </div>
    </Link>
  ) : (
    <button
      style={buttonStyle}
      className={styles.button}
      onClick={handleClick}
      disabled={!link} // Disable the button if there is no link
    >
      {text}
    </button>
  );

  return ButtonElement;
};

export default Button;

// components/ServicesComponent.js
"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./services.module.scss";
import Button from "../common/readmore"; // Import your custom Button component

interface CardProps {
  number: number;
  buttonText: string; // Renamed clickableText to buttonText
  icon: ReactNode;
  title: string;
  description: ReactNode;
  // linkTo: string;
}

const Services: React.FC<CardProps> = ({
  number,
  buttonText,
  title, // Include the title property
  icon,
  description,
}) => {
  function handleButtonClick(): void {}

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.icon}>{icon}</div>
        <h2>{title}</h2> {/* Display the title text */}
        <h4>{description}</h4>
      </div>
      <div className={styles.cardFooter}>
        <span>{number}</span>
        {/* Using your custom Button component */}
        {/* <Button
          link="/services"
          text={buttonText}
          size="0.8em"
          onClick={handleButtonClick}
          cursorPointer={true}
        /> */}
      </div>
    </div>
  );
};

export default Services;

// components/ServicesComponent.js
"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./services.module.scss";
import Button from "../common/readmore"; // Import your custom Button component

interface CardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  href: string;
  onClick?: () => void;
}
type ServicesProps = any;
const Services: React.FC<ServicesProps> = ({
  title,
  icon,
  description,
  href,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // Redirect to the specified href
    window.location.href = href;
  };
  return (
    <button className={styles.card} onClick={handleClick}>
      <div className={styles.cardContent}>
        <div className={styles.icon}>{icon}</div>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
      <div className={styles.cardFooter}></div>
    </button>
  );
};

export default Services;

// components/ServicesComponent.js
"use client";

import styles from "./services.module.scss";
import React, { useState, useEffect,ReactNode } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



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
  useEffect(() => {
    Aos.init({
      duration: 3000,
     
  
    });
  }, []);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    // Redirect to the specified href
    window.location.href = href;
  };
  return (
    <button data-aos="fade-up" className={styles.card} onClick={handleClick}>
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

// components/ServicesComponent.js
"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./services.module.scss";

interface CardProps {
  number: number;
  clickableText: string;
  icon: ReactNode;
  description: string;
}

const Services: React.FC<CardProps> = ({
  number,
  clickableText,
  icon,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.icon}>{icon}</div>
        <p>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <span>{number}</span>
        <a href="#">{clickableText}</a>
      </div>
    </div>
  );
};

export default Services;

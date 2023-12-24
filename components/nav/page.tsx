// components/Navbar.tsx
"use client";
import styles from "../../src/styles/pages/nav.module.scss";
// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Logo</div>
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/services">
          <span>Services</span>
        </Link>
        <Link href="/about">
          <span>About</span>
        </Link>
        <Link href="/portfolio">
          <span>Portfolio</span>
        </Link>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleNavbar}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;

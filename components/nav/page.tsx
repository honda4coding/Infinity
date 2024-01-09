"use client";

import React, { useState } from "react";
import styles from "../../src/styles/pages/nav.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  // State to control visibility of the opening times
  const [showOpeningTimes, setShowOpeningTimes] = useState(false);

  // State to control the menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggles the visibility of the opening times section
  const toggleOpeningTimes = () => {
    setShowOpeningTimes(!showOpeningTimes);
  };

  // Handles the toggle of the menu
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggles the menu
    setShowOpeningTimes(false); // Closes the opening times when menu is toggled
  };

  // Sample opening times data
  const openingTimes = [
    { day: "Sunday - Tuesday", hours: "8:30 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:30 AM - 1:00 PM" },
    { day: "Friday", hours: "Closed" },
  ];

  return (
    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
      {/* Navbar Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <div style={{ width: "100%", maxWidth: "110px", height: "auto" }}>
            <Image
              src="/logo.png"
              alt="Clock Icon"
              width={110}
              height={110}
              layout="responsive"
            />
          </div>
        </Link>

        {/* <strong>Infinity</strong> */}
      </div>
      <div className={styles.openingTimesButton} onClick={toggleOpeningTimes}>
        <div className={styles.openTimeLogoText}>
          <h6>OPENING HOURS</h6>
        </div>

        <Image src={"/clock.svg"} alt="Clock Icon" width={20} height={20} />
      </div>

      {/* Navbar Links */}
      <ul className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        {/* Add other menu items here */}
      </ul>

      <label
        htmlFor="nav-toggle"
        className={styles.iconBurger}
        onClick={handleToggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </label>

      {showOpeningTimes && !isMenuOpen && (
        <div
          className={`${styles.openingTimes} ${
            showOpeningTimes ? styles.active : ""
          }`}
        >
          <strong>{`Opening Hours:`}</strong>
          <ul>
            {openingTimes.map((time, index) => (
              <li key={index}>
                <span>{time.day}:</span> {time.hours}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

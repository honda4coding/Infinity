"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../src/styles/pages/nav.module.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showOpeningTimes, setShowOpeningTimes] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const openingTimesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openingTimesRef.current &&
        !openingTimesRef.current.contains(event.target as Node)
      ) {
        setShowOpeningTimes(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleOpeningTimes = () => {
    setShowOpeningTimes(!showOpeningTimes);
    setMenuOpen(false); // Close menu when opening times are toggled
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setShowOpeningTimes(false); // Close opening times when menu is toggled
  };

  const openingTimes = [
    { day: "Sunday - Tuesday", hours: "8:30 AM - 5:00 PM" },
    { day: "Friday , Saturday", hours: "Closed" },
  ];

  return (
    <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
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
      </div>

      <div className={styles.openingTimesButton} onClick={toggleOpeningTimes}>
        <div className={styles.openTimeLogoText}>
          <h6>OPENING HOURS</h6>
        </div>
        <Image src={"/clock.svg"} alt="Clock Icon" width={20} height={20} />
      </div>

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
          ref={openingTimesRef}
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

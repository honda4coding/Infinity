// components/Footer.js
import React from "react";
import styles from "../../src/styles/pages/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__parralax}>
        <div className={styles["footer__parralax-trees"]}></div>
        <div className={styles["footer__parralax-moto"]}></div>
        <div className={styles["footer__parralax-secondplan"]}></div>
        <div className={styles["footer__parralax-premierplan"]}></div>
        <div className={styles["footer__parralax-voiture"]}></div>
      </div>
      <div className="container">
        <div className={styles.footer__columns}>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <i data-feather="shopping-bag"></i> <span>La boutique</span>
            </h3>
            <nav className={styles.footer__nav}>
              <ul className={styles.footer__navList}>
                {/* Add your three links for La boutique here */}
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <i data-feather="share-2"></i> <span>Nos réseaux</span>
            </h3>
            <nav className={styles.footer__nav}>
              <ul className={styles.footer__navList}>
                {/* Add your three links for Nos réseaux here */}
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <i data-feather="send"></i> <span>Contact</span>
            </h3>
            <nav className={styles.footer__nav}>
              <ul className={styles.footer__navList}>
                {/* Add your three links for Contact here */}
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <div className={styles.footer__copyrights}>
          <p>
            Réalisé par{" "}
            <a
              href="https://twitter.com/silvereledev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @SilvereLeDev
            </a>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

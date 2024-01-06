// components/Footer.tsx
import React from "react";
import styles from "../../src/styles/pages/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__parralax}>
        <div className={styles["footer__parralax-trees"]}></div>
        <div className={styles["footer__parralax-moto"]}></div>
        <div className={styles["footer__parralax-secondplan"]}></div>
        <div className={styles["footer__parralax-premierplan"]}></div>
        <div className={styles["footer__parralax-voiture"]}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.footer__columns}>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <span>{`Contact us`}</span>
            </h3>
            <nav className={styles.footer__nav}>
              <div className={styles.footer__navList}>
                <div className={styles.contactInfo}>
                  {/* Contact information */}
                  <p className={styles.contactInfo}>{`Tel: +20643135910`}</p>
                  <p className={styles.contactInfo}>
                    {`E-mail: tech@infinity-marine.org`}
                  </p>
                  <p className={styles.contactInfo}>
                    {` Reg.: reg@infinity-marine.org`}
                  </p>
                </div>

                <div className={styles.socialMediaLinks}>
                  {/* Social media links */}
                  <a
                    href="https://facebook.com/infinitymarine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`Facebook`}
                  </a>

                  <a
                    href="https://twitter.com/infinitymarine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`Twitter`}
                  </a>

                  <a
                    href="https://instagram.com/infinitymarine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`Instagram`}
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <span>{`Location`}</span>
            </h3>
            <h5>
              <p>{`25 Reda Street,`}</p>
              <p>{`ADAM Bldg. 4th Floor,`}</p>
              <p>{`Ismailia-Egypt`}</p>
            </h5>
          </div>
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <span>{`Hotline`}</span>
            </h3>
            <nav className={styles.footer__nav}>
              <div className={styles.footer__navList}>
                {/* Hotline information */}
                <h1>{`+201033050011`}</h1>
              </div>
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

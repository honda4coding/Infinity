import React from "react";
import styles from "../../src/styles/pages/footer.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "../common/social";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__parralax}>
        <div className={styles["footer__parralax-premierplan"]}></div>
        <div className={styles["footer__parralax-voiture"]}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.footer__columns}>
          {/* Contact us column */}
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <span>
                <FontAwesomeIcon icon={faEnvelope} /> {`Contact us`}
              </span>
            </h3>
            <nav className={styles.footer__nav}>
              {/* Contact information */}
              <div className={styles.footer__navList}>
                {/* Contact information */}
                <p className={styles.contactInfo}>{`Tel: +20643135910`}</p>
                <p className={styles.contactInfo}>
                  {`E-mail: tech@infinity-marine.org`}
                </p>
                <p className={styles.contactInfo}>
                  {` Reg.: reg@infinity-marine.org`}
                </p>
              </div>
              {/* Social media links */}
            </nav>
          </div>

          {/* Location column */}
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} /> {`Location`}
              </span>
            </h3>
            <h5>
              <p>{`25 Reda Street,`}</p>
              <p>{`ADAM Bldg. 4th Floor,`}</p>
              <p>{`Ismailia-Egypt`}</p>
            </h5>
          </div>

          {/* Hotline column */}
          <div className={styles.footer__col}>
            <h3 className={styles.footer__colTitle}>
              <span>
                <FontAwesomeIcon icon={faPhone} /> {`Hotline`}
              </span>
            </h3>
            <nav className={styles.footer__nav}>
              <div className={styles.footer__navList}>
                <h1>{`+201033050011`}</h1>
              </div>
            </nav>
          </div>

          {/* Separate column for social media links */}
          <div className={styles.socialText}>
            <div className={styles.footer__col}>
              <h3 className={styles.footer__colTitle}>
                <span>
                  <FontAwesomeIcon icon={faShareAlt} /> Social
                </span>
              </h3>
              <div className={styles.footer__nav}>
                <div className={styles.socialMediaLinks}>
                  <SocialMedia></SocialMedia>
                </div>
              </div>
            </div>
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

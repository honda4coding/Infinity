import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./social.module.scss";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia: React.FC = () => {
  return (
    <ul className={styles.social}>
      <li className={styles["social-item"]}>
        <a
          className={`${styles["social-link"]} ${styles["facebook"]}`}
          href="https://www.facebook.com/profile.php?id=100078132671829&mibextid=vk8aRt"
          title="Visit our Facebook page"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ width: "30px", height: "30px" }}
          />
        </a>
      </li>
      {/* <li className={styles["social-item"]}>
        <a
          className={`${styles["social-link"]} ${styles["twitter"]}`}
          href="/"
          title="Check out our Twitter profile"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ width: "30px", height: "30px" }}
          />
        </a>
      </li> */}
      <li className={styles["social-item"]}>
        <a
          className={`${styles["social-link"]} ${styles["linkedin"]}`}
          href="https://www.linkedin.com/company/infinity-marine-consultants/"
          title="Connect with us on LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ width: "30px", height: "30px" }}
          />
        </a>
      </li>
      {/* Add more list items for additional social media */}
    </ul>
  );
};
export default SocialMedia;

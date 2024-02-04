// components/Popup.js
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./popup.module.scss";

interface PopupProps {
  imagePaths?: string[]; // Make it optional
  content?: string[]; // Make it optional
  onClose?: () => void;
}

const Popup: React.FC<PopupProps> = ({
  imagePaths = [],
  content = [],
  onClose,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = (e: any) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      if (e.target.closest(".popupContent") === null) {
        setIsPopupOpen(false);
        onClose && onClose(); // Call the onClose callback if provided
      }
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imagePaths.length - 1
    );
    setCurrentContent((prevContent) =>
      prevContent > 0 ? prevContent - 1 : content.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < imagePaths.length - 1 ? prevIndex + 1 : 0
    );
    setCurrentContent((prevContent) =>
      prevContent < content.length - 1 ? prevContent + 1 : 0
    );
  };

  useEffect(() => {
    const handleMouseDown = (e: any) => {
      closePopup(e);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className={styles.popupContainer}>
      <button className={styles.popupButton} onClick={togglePopup}>
        our projects
      </button>

      {isPopupOpen && (
        <>
        <div className={styles.overlay} onClick={togglePopup} />

        <div className={styles.popup} ref={popupRef}>
          <div className={styles.popupContent}>
            <span className={styles.popupClose} onClick={togglePopup}>
              &times;
            </span>
            <div className={styles.popupContentWrapper}>
              <div className={styles.textContainer}>
                <p>{content[currentContent]}</p>
              </div>

              <div className={styles.imageContainer}>
                <button
                  className={`${styles.arrowButton} ${styles.left}`}
                  onClick={handlePrevImage}
                >
                  {"<"}
                </button>
                <img
                  src={imagePaths[currentImageIndex]}
                  alt={`Popup Image ${currentImageIndex + 1}`}
                />
                <button
                  className={`${styles.arrowButton} ${styles.right}`}
                  onClick={handleNextImage}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

Popup.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string.isRequired),
  content: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClose: PropTypes.func,
};

export default Popup;

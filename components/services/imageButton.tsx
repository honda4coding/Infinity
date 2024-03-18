import React, { useEffect, useRef, useState } from "react";
import styles from "./imageButton.module.scss"; // Import your module SCSS file

interface CustomButton1Props {
  imageUrl: string; // Image URL to display in the popup
}

const ImageButton: React.FC<CustomButton1Props> = ({ imageUrl }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside the popup
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        // Click outside the popup, close it
        setIsPopupOpen(false);
      }
    };

    // Add event listener when the popup is open
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the popup is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <button onClick={togglePopup} className={styles.clickButton}>
        Our Registration
      </button>
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent} ref={popupRef}>
            {/* <button onClick={togglePopup}>Close</button> */}
            <img
              src={"https://i.ibb.co/CW2g8Xm/Copy-of-Untitled.png"}
              alt="Popup Image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageButton;

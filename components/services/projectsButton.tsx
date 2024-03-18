import React, { useState, useEffect, useRef } from "react";
import styles from "./projectsButton.module.scss"; // Import your module SCSS file

interface ProjectButtonProps {
  projectData: {
    title: string;
    projectTitle: string;
    projectDescription: string[] | string; // Updated type to accept either string or array of strings
    imageUrl: string;
  }[]; // Array of project data containing additional properties
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ projectData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null); // Ref for the popup content

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isPopupOpen]);

  return (
    <>
      <button onClick={togglePopup} className={styles.clickButton}>
        View Project
      </button>
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div ref={popupRef} className={styles.popupContent}>
            <div className={styles.project}>
              <h3 className={styles.projectTitle}>
                {projectData[currentIndex].projectTitle}
              </h3>
              <div className={styles.projectDescription}>
                {Array.isArray(projectData[currentIndex].projectDescription) ? (
                  // Check if projectDescription is an array before mapping
                  projectData[currentIndex].projectDescription.map(
                    (line, index) => <p key={index}>{line}</p>
                  )
                ) : (
                  // If not an array, render it as a single paragraph
                  <p>{projectData[currentIndex].projectDescription}</p>
                )}
              </div>
              <img
                src={projectData[currentIndex].imageUrl}
                alt="Project Image"
                className={styles.projectImage}
              />
            </div>
            <div className={styles.navigation}>
              <button onClick={prevSlide} className={styles.navButton}>
                &lt;
              </button>
              <button onClick={nextSlide} className={styles.navButton}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectButton;

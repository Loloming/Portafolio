import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

export default function Carousel(props) {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel_wrapper}>
        <button onClick={prev} className={currentIndex > 0 && styles.left || styles.left_disabled}></button>
        <div className={styles.carousel_content_wrapper}>
          <div
            className={styles.carousel_content}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <button onClick={next} className={currentIndex + 1 < length && styles.right || styles.right_disabled}></button>
      </div>
    </div>
  );
}

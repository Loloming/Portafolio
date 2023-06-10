import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 1000)
    );

    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [modal]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>{`<dB />`}</h1>
        {isMobile ? (
          <svg
            onClick={() => setModal(!modal)}
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        ) : (
          <ul className={styles.header_list}>
            <p
              onClick={() => {
                document
                  .getElementById("#about")
                  .scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              className={styles.header_item}
            >
              About
            </p>
            <p
              onClick={() => {
                document
                  .getElementById("#experience")
                  .scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              className={styles.header_item}
            >
              Experience
            </p>
            <p
              onClick={() => {
                document
                  .getElementById("#contact")
                  .scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              className={styles.header_item}
            >
              Contact
            </p>
          </ul>
        )}
      </header>
      {modal && (
        <section onClick={() => setModal(!modal)} className={styles.modal}>
          <ul className={styles.header_list}>
            <p
              onClick={() => {
                setModal(!modal)
                document
                  .getElementById("#about")
                  .scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              className={styles.header_item}
            >
              About
            </p>
            <p
              onClick={() => {
                setModal(!modal)
                document
                  .getElementById("#experience")
                  .scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              className={styles.header_item}
            >
              Experience
            </p>
            <p
              onClick={() => {
                setModal(!modal)
                document
                  .getElementById("#contact")
                  .scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              className={styles.header_item}
            >
              Contact
            </p>
          </ul>
        </section>
      )}
    </>
  );
}

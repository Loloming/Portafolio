import { useEffect, useState } from "react";
import styles from "./Presentation.module.css";

export default function Presentation() {
  const [blob, setBlob] = useState(document.getElementById(styles.blob))

  useEffect(() => {
    setBlob(document.getElementById(styles.blob))
  }, [styles])

  document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;

    const left = clientX - document.body.scrollLeft;
    const top = clientY - document.body.scrollTop;

    blob?.animate(
      {
        left: `${left}px`,
        top: `${top}px`,
      },
      { duration: 2000, fill: "forwards" }
    );
  };

  return (
    <>
      <section className={styles.section_container}>
          <div id={styles.blur}></div>
          <div id={styles.blob}></div>
        <article className={styles.article_container}>
          <aside className={styles.presentation_container}>
            <h2 className={styles.presentation_name}>DAMIAN BRUZZONI</h2>
            <h3 className={styles.presentation_description}>
              FULL-STACK WEB DEVELOPER
            </h3>
            <div className={styles.presentation_reflection}>
              <h2 className={styles.name_reflection}>DAMIAN BRUZZONI</h2>
              <h3 className={styles.description_reflection}>
                FULL-STACK WEB DEVELOPER
              </h3>
            </div>
          </aside>
          <aside className={styles.image_container}>
            <div className={styles.image}></div>
          </aside>
        </article>
        <div id={styles.separator}></div>
      </section>
      <section className={styles.spikes} />
    </>
  );
}

import React from "react";
import styles from "./Card.module.css";

export default function Card({
  name,
  description,
  images,
  technologies,
  code,
  demo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <div className={styles.image_container}>
          {images?.map((image) => {
            return <img key={name} className={styles.card_image} src={image} />;
          })}
        </div>
        <div className={styles.heading}>
          {(code && (
            <div className={styles.anchors}>
              <a className={styles.anchor} href={code}>
                Code
              </a>
            </div>
          )) || (
            <p title="Coming soon..." className={styles.no_anchor}>
              Code
            </p>
          )}
          <h3 className={styles.card_name}>{name}</h3>
          {(demo && (
            <div className={styles.anchors}>
              <a className={styles.anchor} href={demo}>
                Demo
              </a>
            </div>
          )) || (
            <p title="Coming soon..." className={styles.no_anchor}>
              Demo
            </p>
          )}
        </div>
        <p className={styles.card_description}>{description}</p>
        <div className={styles.technologies_container}>
          {technologies.map((tech) => {
            return (
              <div key={tech} className={styles.card_technology}>
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

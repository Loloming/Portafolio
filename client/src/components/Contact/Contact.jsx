import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="#contact" className={styles.contact_container}>
      <div className={styles.contact}>
        <h2 className={styles.contact_component}>{`<`}</h2>
        <h2 className={styles.contact_component_text}>Contact</h2>
        <h2 className={styles.contact_component}>{`/>`}</h2>
      </div>
      <div className={styles.contact_text}>
        <h6>
          Ready to take your project to the next level? Let's collaborate and<br/>
          make it a success together. If you have a project in mind, reach<br/> out to me today and let's create
          something amazing!
        </h6>
      </div>
    </section>
  );
}

import styles from "./About.module.css";
export default function About() {
  return (
    <article id="#about" className={styles.about_container}>
      <section className={styles.about_section}>
        <h2 className={styles.about_text}>#about-me</h2>
        <p className={styles.about_introduction}>
          Hi! I'm a passionate developer based in Buenos Aires, Argentina.
          <br />
          My passion for programming (and IT world in general) has led me to
          dive into the fascinating world of creating online experiences.
          <br />
          With each project, I push myself beyond my limits to create innovative
          solutions and step out of my comfort zone.
          <br />
          I'm excited to take on new challenges and collaborate in
          multidisciplinary teams to bring ambitious ideas to life. I'm ready to
          turn your concepts into reality and build a strong and successful
          online presence together!
        </p>
      </section>
      <section className={styles.tech_stack}>
        <h6>
          Tech <br />
          Stack
        </h6>
        <li>
          <div id={styles.tech_box}>
            <div className={styles.box_round}>
              <div className={styles.tech} id={styles.react}></div>
            </div>
            <p id={styles.react_info}>ReactJS</p>
          </div>
          <div id={styles.tech_box}>
            <div className={styles.box_round}>
              <div className={styles.tech} id={styles.redux}></div>
            </div>
            <p id={styles.redux_info}>Redux Toolkit</p>
          </div>
          <div id={styles.tech_box}>
            <div className={styles.box_round}>
              <div className={styles.tech} id={styles.nodejs}></div>
            </div>
            <p id={styles.nodejs_info}>NodejS</p>
          </div>
          <div id={styles.tech_box}>
            <div className={styles.box_round}>
              <div className={styles.tech} id={styles.sequelize}></div>
            </div>
            <p id={styles.sequelize_info}>Sequelize</p>
          </div>
          <div id={styles.tech_box}>
            <div className={styles.box_round}>
              <div className={styles.tech} id={styles.socket}></div>
            </div>
            <p id={styles.socket_info}>Socket.io</p>
          </div>
          <div id={styles.tech_box}>
            <div className={styles.box_round}>
              <div className={styles.tech} id={styles.typescript}></div>
            </div>
            <p id={styles.typescript_info}>Typescript</p>
          </div>
        </li>
      </section>
    </article>
  );
}

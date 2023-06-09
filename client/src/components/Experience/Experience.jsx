import React from "react";
import styles from "./Experience.module.css";
import { projects } from "../../assets/projects/projects";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
export default function Experience() {
  return (
    <article id="#experience" className={styles.container}>
      <section className={styles.experience}>
        <div className={styles.divider}>
          <div className={styles.lines}></div>
          <h2>Experience()</h2>
          <div className={styles.lines}></div>
        </div>
      </section>
      <div className={styles.projects}
      >
        <Carousel>
          {projects.map((project) => {
            return (
              <Card
                name={project.name}
                description={project.description}
                images={project.images}
                technologies={project.technologies}
                code={project.code}
                demo={project.demo}
                key={project.name}
              />
            );
          })}
        </Carousel>
      </div>
    </article>
  );
}

/* eslint-disable @next/next/no-img-element */
import { ProjectType } from "@/resources/types/projects";
import styles from "./SingleProject.module.css";
import IconGitHub from "@/components/icons/github";
import IconExternal from "@/components/icons/external";

const SingleProject: React.FC<{ project: ProjectType; index: number }> = (
  props
) => {
  const { project } = props;

  const wrapperClasses = `${styles.wrapper} ${styles.right}`;
  const technologyClasses = `${styles.technologies} ${styles["technologies-right"]}`;

  return (
    <div className={wrapperClasses}>
      <div className={styles["project-image"]}>
        <a
          href={project.url}
          className={styles.image}
          target="_blank"
          rel="noreferrer"
        >
          <img src={project.image} alt={project.title} className={styles.img} />
        </a>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <ul className={technologyClasses}>
          {project.technologies.map((tech, index) => {
            return (
              <li key={index} className={styles.tech}>
                {tech}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <IconGitHub className={styles.github} />
          </a>
          <a href={project.url} target="_blank" rel="noreferrer">
            <IconExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

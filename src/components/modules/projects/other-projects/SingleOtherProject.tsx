import IconExternal from "@/components/icons/external";
import IconFolder from "@/components/icons/folder";
import { ProjectType } from "@/resources/types/projects";
import styles from "./SingleOtherProject.module.css";

const SingleOtherProject: React.FC<{ project: ProjectType }> = (props) => {
  const { project } = props;
  return (
    <li className={styles.wrapper}>
      <div className={styles.icons}>
        <div className={styles.folder}>
          <a target="_blank" rel="noreferrer" href={project.githubLink}>
            <IconFolder />
          </a>
        </div>
        <div className={styles.external}>
          <a target="_blank" rel="noreferrer" href={project.url}>
            <IconExternal />{" "}
          </a>
        </div>
      </div>
      <header className={styles.header}>
        {/* Building a Headless Mobile App CMS From Scratch */}
        {project.title}
      </header>
      <p className={styles.description}>
        {project.description}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nostrum,
        earum alias odio exercitationem repudiandae nesciunt cum iste ipsum
        saepe accusamus doloremque neque id natus, ratione, expedita at? Fuga,
        magnam. */}
      </p>

      <ul className={styles.technologies}>
        {/* ["tailwind css", "node.js", "firebase"] */}
        {project.technologies.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ul>
    </li>
  );
};

export default SingleOtherProject;

import { DUMMY_PROJECTS } from "@/resources/dummy-data/dummy-projects";
import OtherProjects from "./other-projects/OtherProjects";
import styles from "./Projects.module.css";
import SingleProject from "./SingleProject";
import SectionHeading from "@/components/ui/section-heading/SectionHeading";

const Projects = () => {
  return (
    <section id="projects">
      <SectionHeading
        number={"03"}
        content={"Production Websites I've Built Outside Work"}
      />
      <ul className={styles.ul}>
        {DUMMY_PROJECTS.map((project, index) => {
          return (
            <li key={index}>
              <SingleProject index={index + 1} project={project} />
            </li>
          );
        })}
      </ul>
      <div className={styles["other-projects"]}>
        <OtherProjects />
      </div>
    </section>
  );
};

export default Projects;

import ProjectsContext from "@/contexts/projects-ctx";
import styles from "./ProjectsPage.module.css";
import React, { useContext } from "react";
import CustomSelect from "./CustomSelect";
import SingleOtherProject from "@/components/modules/projects/other-projects/SingleOtherProject";

const ProjectsPage = () => {
  const projectsCtx = useContext(ProjectsContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles["select-box"]}>
        <CustomSelect />
      </div>
      <ul className={styles["projects-ul"]}>
        {projectsCtx.projects.map((project, index) => {
          return <SingleOtherProject key={index} project={project} />;
        })}
      </ul>
    </div>
  );
};

export default ProjectsPage;

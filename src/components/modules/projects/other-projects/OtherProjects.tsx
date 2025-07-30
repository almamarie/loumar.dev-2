"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button/Button";
import { OTHER_PROJECTS } from "@/resources/dummy-data/dummy-projects";
import styles from "./OtherProjects.module.css";
import SingleOtherProject from "./SingleOtherProject";

const OtherProjects = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <h3>Other Noteworthy Projects</h3>

      <ul className={styles.projects}>
        {OTHER_PROJECTS.slice(0, 10).map((project, index) => {
          return <SingleOtherProject key={index} project={project} />;
        })}
      </ul>

      <div className={styles["button-wrapper"]}>
        <Button
          text="view all projects"
          type={"button"}
          onClick={() => {
            router.push("/projects");
          }}
        />
      </div>
    </div>
  );
};

export default OtherProjects;

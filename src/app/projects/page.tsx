"use client";
import React from "react";
import styles from "./page.module.css";
import { ProjectsContextProvider } from "@/contexts/projects-ctx";
import ProjectsPage from "@/pages/projects/ProjectsPage";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <ProjectsContextProvider>
        <ProjectsPage />
      </ProjectsContextProvider>
    </div>
  );
};

export default page;

import React, { useState } from "react";
import { ProjectType } from "../resources/types/projects";
import { ALL_PROJECTS } from "@/resources/dummy-data/dummy-projects";

type ContextType = {
  projects: ProjectType[];
  changeFilter: (filter: ProjectsFiltertype) => void;
};
const ProjectsContext = React.createContext<ContextType>({
  projects: [],
  changeFilter: () => {},
});

export type ProjectsFiltertype = "fullstack" | "backend" | "frontend";
export const ProjectsContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [projects, setProjects] = useState<ProjectType[]>(ALL_PROJECTS);

  const changeFilter = (filter: ProjectsFiltertype) => {
    const filteredProjects = ALL_PROJECTS.filter((proj) => {
      return proj.type === filter;
    });
    setProjects(filteredProjects);
  };

  return (
    <ProjectsContext.Provider value={{ projects, changeFilter }}>
      {props.children}{" "}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;

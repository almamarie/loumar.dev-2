import React, { useContext, useState } from "react";
import styles from "./CustomSelect.module.css";
import ProjectsContext, { ProjectsFiltertype } from "@/contexts/projects-ctx";

const CustomSelect = () => {
  const projectsCtx = useContext(ProjectsContext);
  const [showOptions, setShowOptions] = useState(false);
  const [currentOption, setCurrentOption] = useState("");

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const selectHandler = (option: ProjectsFiltertype) => {
    return () => {
      setShowOptions(false);
      setCurrentOption(option);
      projectsCtx.changeFilter(option);
    };
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["select-head"]} onClick={toggleOptions}>
        <span className={styles.select}>
          {currentOption ? `Showing ${currentOption}` : "Filter"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.chevron}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      <div className={`${styles.options} ${showOptions ? "" : "hide"}`}>
        <span onClick={selectHandler("frontend")} className={styles.option}>
          Frontend
        </span>
        <span onClick={selectHandler("backend")} className={styles.option}>
          Backend
        </span>
        <span onClick={selectHandler("fullstack")} className={styles.option}>
          Fullstack
        </span>
      </div>
    </div>
  );
};

export default CustomSelect;

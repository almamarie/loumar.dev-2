"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import mainHeaderStyles from "./MainHeader.module.css";
import styles from "./ProjectsHeader.module.css";

function ProjectsHeader() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
    
     const navigateToHomePage = () => {
       router.push("/");
     };
  return (
    <Fragment>
      <header className={mainHeaderStyles.wrapper}>
        <span className={mainHeaderStyles.name} onClick={navigateToHomePage}>
          Louis Marie
        </span>

        <button className={styles.btn} type="button" onClick={goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <span>Back</span>
        </button>
      </header>
    </Fragment>
  );
}

export default ProjectsHeader;

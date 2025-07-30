import { achievementData } from "@/resources/dummy-data/achievements";
import React from "react";
import Achievement from "./Achievement";
import styles from "./Achievements.module.css";
import SectionHeading from "@/components/ui/section-heading/SectionHeading";

const Achievements = () => {
  return (
    <section className={styles.wrapper}>
      <SectionHeading
        number="04"
        content="Achievements and Technopreneurship"
      />
      <ul>
        {achievementData.map((achievement, index) => {
          return <Achievement key={index} achievement={achievement} />;
        })}
      </ul>
    </section>
  );
};

export default Achievements;

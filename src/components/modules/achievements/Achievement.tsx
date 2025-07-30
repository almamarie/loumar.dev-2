import { AchievementType } from "@/resources/dummy-data/achievements";
import styles from "./Achievement.module.css";
import React from "react";

const Achievement: React.FC<{
  achievement: AchievementType;
}> = (props) => {
  return (
    <li className={styles.wrapper}>
      <header className={styles.header}>
        <h3>
          {props.achievement.date} {"   "}
          {props.achievement.eventName}
          {" - "}
          {props.achievement.organization}
          {" - "}
          <span className={styles["award-type"]}>
            {props.achievement.awardType}
          </span>
        </h3>
      </header>

      <ul className={`${styles.descriptions} fancy-ul`}>
        {props.achievement.description.map((describe, index) => {
          return (
            <li className={styles["description-li"]} key={index}>
              {describe}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Achievement;

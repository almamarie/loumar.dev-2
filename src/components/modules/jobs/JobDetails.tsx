import { JobType } from "@/resources/types/jobs-types";
import styles from "./JobDetails.module.css";

const JobDetails: React.FC<{ job: JobType }> = (props) => {
  const job = props.job;
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.h3}>
        <span className={styles.title}>{job.title}</span>
        <span>
          <span className={styles["at-sign"]}>{" @ "}</span>
          <a className="inline-link" href={job.url}>
            {job.company}
          </a>
        </span>
      </h3>
      <p className={styles.duration}>{job.duration}</p>

      <ul className={"fancy-ul"}>
        {job.achievements.map((job, index) => {
          return (
            <li key={index} className={styles.achievements}>
              {job}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobDetails;

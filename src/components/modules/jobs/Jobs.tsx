"use client";
import { DUMMY_JOBS } from "@/resources/dummy-data/dummy-jobs";
import { JobsType, JobType } from "@/resources/types/jobs-types";
import { useEffect, useRef, useState } from "react";

import styles from "./Jobs.module.css";
import CompanyName from "./CompanyName";
import JobDetails from "./JobDetails";
import SectionHeading from "@/components/ui/section-heading/SectionHeading";

const Jobs = () => {
  const [currentJob, setCurrentJob] = useState<JobType>();
  const jobs = useRef<JobsType>([]);
  useEffect(() => {
    jobs.current = DUMMY_JOBS;
    setCurrentJob(jobs.current[0]);
  }, []);
  return (
    <section className={styles.wrapper} id="work">
      <SectionHeading number="02" content="Where I've Worked" />
      <div className={styles.details}>
        <ul className={styles.titles}>
          {jobs.current &&
            jobs.current
              .map((job) => {
                return job.company;
              })
              .map((company, index) => {
                return (
                  <CompanyName
                    key={index}
                    company={company}
                    isCurremt={currentJob?.company === company}
                    onClick={() => {
                      setCurrentJob(jobs.current[index]);
                    }}
                  />
                );
              })}
        </ul>
        <div className={styles["job-details"]}>
          {currentJob && <JobDetails job={currentJob} />}
        </div>
      </div>
    </section>
  );
};

export default Jobs;

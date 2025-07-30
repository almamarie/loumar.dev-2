import React from "react";
import styles from "./Certificates.module.css";
import { certs } from "@/resources/dummy-data/certificates";
import SectionHeading from "@/components/ui/section-heading/SectionHeading";

const Certificates = () => {
  return (
    <section className={styles.wrapper}>
      <SectionHeading number={"05"} content={"Certificates"} />
      <ul>
        {certs.map((cert, index) => {
          return (
            <li key={index} className={styles.li}>
              {cert.title} {" - "}
              <a className="inline-link" target="_blanc" href={cert.certLink}>
                view certificate
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Certificates;

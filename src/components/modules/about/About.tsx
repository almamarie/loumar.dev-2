// import Picture from "../picture/Picture";

import SectionHeading from "@/components/ui/section-heading/SectionHeading";
import styles from "./About.module.css";
import louisPicturePng from "@/resources/pictures/profile-picture-2.png";
// import louisPictureWebp from "@/resources/pictures/profile-picture-2.webp";
import Image from "next/image";

const About = () => {
  const skills: string[] = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "Postgres",
    "REACT",
    "Next.js",
    "AWS",
    "Serverless",
    "Node.js",
    "Firebase",
  ];
  return (
    <section className={styles.wrapper} id="about">
      <SectionHeading number="01" content="About Me" />
      <div className={styles.main}>
        <div className={styles.text}>
          <p>
            Hello! My name is Louis Marie and I enjoy creating things that live
            on the internet. My interest in software engineering started back in
            2018 when I attended the{" "}
            <a
              className="inline-link"
              href="https://www.waziup.org/"
              target="_blank"
              rel="noreferrer"
            >
              Wazihub
            </a>{" "}
            IoT bootcamp — turns out manipulating sensors taught me a lot about
            programming!
          </p>
          <p>
            Fast-forward to today, and I&apos;ve had the privilege of working
            with the network of tech hubs in Africa{" "}
            <a
              className="inline-link"
              href="https://afrilabs.com/"
              target="_blank"
              rel="noreferrer"
            >
              AfriLabs,
            </a>{" "}
            <a
              href="https://www.ghanatechlab.com/"
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              Ghana Tech Lab,
            </a>{" "}
            and the biggest organization in Africa,{" "}
            <a
              href="https://www.au.int"
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              The AU
            </a>
            .
          </p>
          <p className={styles.paragraph}>
            At the AU, I proposed and initiated the development of an
            application to help report human rights situations to the{" "}
            <span className={"highlight"}>
              <a
                className="inline-link"
                target="_blanc"
                href="https://achpr.au.int/en"
              >
                ACHPR
              </a>
            </span>{" "}
            and an application to support the ACHPR&apos;s interaction with her{" "}
            <span className={"highlight"}>600+ </span>
            Non-Governmental Organizations and{" "}
            <span className={"highlight"}>50+</span> National Human Rights
            Institutions.
          </p>
          <p>
            This led me to receiving an{" "}
            <span className={"highlight"}>award </span>at the{" "}
            <a
              className="inline-link"
              target="_blank"
              rel="noreferrer"
              href="https://afrilabsgathering.com/"
            >
              {" "}
              Afrilabs Annual gathering
            </a>{" "}
            in Lusaka, Zambia in October 2022. <br />I have also been vetted as{" "}
            <span className={"highlight"}> Top 5%</span> talent in Africa in the{" "}
            <a
              className="inline-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.alxafrica.com/"
            >
              ALX
            </a>{" "}
            talent pool. <br />
            Currently, I have focused my attention on building a startup that
            blends tech and agriculture to help solve hunger.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className={styles["skills-list"]}>
            {skills &&
              skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
          </ul>
        </div>

        <div className={styles.picture}>
          <Image
            src={louisPicturePng}
            alt={"louis marie atoluko ayariga"}
            priority
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

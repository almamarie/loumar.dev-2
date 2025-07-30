"use client";
import styles from "./Footer.module.css";
import { useEffect, useState } from "react";

const Footer = () => {
  const [githubInfo, setGithubInfo] = useState({
    stars: 0,
    forks: 0,
  });

  return (
    <section className={styles.wrapper} id="footer">
      <p>Built by Louis Marie Atoluko Ayariga</p>
    </section>
  );
};

export default Footer;

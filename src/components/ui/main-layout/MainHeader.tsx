"use client";
import IconClose from "@/components/icons/close";
import IconMenu from "@/components/icons/menu";
import { Fragment, useState } from "react";
import styles from "./MainHeader.module.css";
import { useRouter } from "next/navigation";

function MainHeader() {
  const [showHiddenNav, setShowHiddenNav] = useState(false);
  const router = useRouter();

  const openHiddenNav = () => {
    setShowHiddenNav((prev) => true);
  };

  const closeHiddenNav = () => {
    setShowHiddenNav((prev) => false);
  };

  const navigateToHomePage = () => {
    router.push("/");
  };
  return (
    <Fragment>
      {showHiddenNav && (
        <div className={styles["hidden-nav"]}>
          <nav className={styles.nav}>
            <ul className={styles["hidden-nav--ul"]}>
              <li onClick={closeHiddenNav} className={styles.li}>
                <a className={styles.a} href="#about">
                  <span className={styles.bullet}>01. </span>About
                </a>
              </li>

              <li onClick={closeHiddenNav} className={styles.li}>
                <a className={styles.a} href="#work">
                  <span className={styles.bullet}>02. </span>Work
                </a>
              </li>
              <li onClick={closeHiddenNav} className={styles.li}>
                <a className={styles.a} href="#projects">
                  <span className={styles.bullet}>03. </span>Experience
                </a>
              </li>

              <li onClick={closeHiddenNav} className={styles.li}>
                <a className={styles.a} href="#contact">
                  <span className={styles.bullet}>04. </span>Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <header className={styles.wrapper}>
        <span className={styles.name} onClick={navigateToHomePage}>
          Louis Marie
        </span>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.a} href="#about">
                <span className={styles.bullet}>01. </span>About
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#work">
                <span className={styles.bullet}>02. </span>Work
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#projects">
                <span className={styles.bullet}>03. </span>Experience
              </a>
            </li>

            <li className={styles.li}>
              <a className={styles.a} href="#contact">
                <span className={styles.bullet}>04. </span>Contact
              </a>
            </li>
          </ul>
          <div className={styles["menu-wrapper"]}>
            {showHiddenNav ? (
              <IconClose
                className={styles["menu-icon"]}
                onClick={closeHiddenNav}
              />
            ) : (
              <IconMenu
                className={styles["menu-icon"]}
                onClick={openHiddenNav}
              />
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainHeader;

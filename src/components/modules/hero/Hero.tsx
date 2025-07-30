"use client";
import Button from "@/components/ui/button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <p className={styles.greeting}>Hi, my name is </p>
      <h2 className="inline-block pb-20 font-bold text-[#ccd6f6] text-[68px]">
        Louis Marie Atoluko Ayariga
      </h2>
      <h3 className="font-bold text-[64px]">I build things for the web</h3>
      <p className={styles.text}>
        I’m a software engineer specializing in building exceptional digital
        experiences. Currently, I’m focused on building systems that blend tech
        and photography at SNAPSHARE.
      </p>

      <a href="mailto:alouismariea97@gmail.com">
        <Button type="button" text="contact me" />
      </a>
    </section>
  );
};

export default Hero;

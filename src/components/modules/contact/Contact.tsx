import ButtonLink from "@/components/ui/button/ButtonLink";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.wrapper} id="contact">
      <h3>06. What&apos;s Next?</h3>
      <h2>Get In Touch</h2>
      <p className={styles.text}>
        Are you interested in working with me in your organization? Please reach
        out. Do you have any project that would challenge me to my core, I am
        eagerly interested. my inbox is always open for any question or if you
        just want to say hi. I’ll try my best to get back to you quickly!
      </p>
      <ButtonLink text={"Say Hello"} href={"mailto:alouismariea97@gmail.com"} />
    </section>
  );
};

export default Contact;

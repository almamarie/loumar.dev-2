import styles from "./SectionHeading.module.css";

const SectionHeading: React.FC<{ number: string; content: string }> = (
  props
) => {
  return (
    <header className={styles.wrapper}>
      <span>{props.number}.</span>
      <h3>{props.content}</h3>
      <div className={styles.divider}></div>
    </header>
  );
};

export default SectionHeading;

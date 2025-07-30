import styles from "./Button.module.css";

const ButtonLink: React.FC<{
  text: string;
  href: string;
}> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className={styles.button}
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};

export default ButtonLink;

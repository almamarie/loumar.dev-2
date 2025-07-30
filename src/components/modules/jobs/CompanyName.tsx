import styles from "./CompanyName.module.css";

const CompanyName: React.FC<{
  company: string;
  isCurremt: boolean;
  onClick: () => void;
}> = (props) => {
  const classes = `${styles.wrapper} ${
    props.isCurremt ? styles["current-tab"] : ""
  }`;
  return (
    <li className={classes} onClick={props.onClick}>
      {props.company}
    </li>
  );
};

export default CompanyName;

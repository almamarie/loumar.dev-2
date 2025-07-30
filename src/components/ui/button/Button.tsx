import styles from "./Button.module.css";

const Button: React.FC<{
  text?: string;
  type: "button" | "submit";
  onClick?: Function;
  children?: React.ReactNode;
  className?: String;
}> = (props) => {
  const clickHandler = () => {
    props.onClick && props.onClick();
  };

  // const propsClassName = props.cl
  return (
    <button
      type={!props.type ? "button" : props.type}
      className={`${styles.button} ${props.className}`}
      onClick={clickHandler}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;

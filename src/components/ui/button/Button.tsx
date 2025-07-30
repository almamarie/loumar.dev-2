import styles from "./Button.module.css";

const Button: React.FC<{
  text?: string;
  type: "button" | "submit";
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}> = (props) => {
  const clickHandler = () => {
    if (props.onClick) props.onClick();
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

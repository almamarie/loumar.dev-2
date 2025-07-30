const IconClose: React.FC<{ className: string; onClick?: () => void }> = (
  props
) => {
  const clickHandler = () => {
    if (props.onClick) props.onClick();
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={props.className}
      onClick={clickHandler}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default IconClose;

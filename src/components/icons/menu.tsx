const IconMenu: React.FC<{ className: string; onClick?: () => void }> = (
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
      strokeWidth={1.5}
      stroke="currentColor"
      className={props.className}
      onClick={clickHandler}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  );
};

export default IconMenu;

import Image from "next/image";
import styles from "./ProjectImage.module.css";

const ProjectImage: React.FC<{ src: string; alt: string }> = (props) => {
  return (
    <Image src={props.src} alt={props.alt} className={styles.image} priority />
  );
};

export default ProjectImage;

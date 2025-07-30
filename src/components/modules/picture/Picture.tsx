import Image, { StaticImageData } from "next/image";
import styles from "./Picture.module.css";

const Picture: React.FC<{ src: StaticImageData; alt: string }> = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.wrapper}>
        <Image
          src={props.src}
          alt={props.alt}
          priority
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Picture;

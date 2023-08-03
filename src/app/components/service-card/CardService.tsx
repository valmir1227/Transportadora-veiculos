import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import { title } from "process";

interface CardServicesProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function CardService({
  image,
  description,
  title,
}: CardServicesProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={image} alt="" width={400} height={400} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}

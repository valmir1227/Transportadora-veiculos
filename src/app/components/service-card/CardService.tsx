import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";

interface CardServicesProps {
  image: StaticImageData;
  description: string;
}

export default function CardService({ image, description }: CardServicesProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={image} alt="" width={400} height={400} />
      </div>
      <div className={styles.title}>{description}</div>
      <div className={styles.description}>
        <p>
          There are many variations of passages of Lorem Ipsum typesetting
          industry. Lorem Ipsum has been the industry..Lorem Ipsum is simply
          Ipsum is simply dummy text of the..
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from "./styles.module.scss";
import { RxDividerVertical } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <li>
        <Link className={styles.active} href="/">
          Home
        </Link>
        <RxDividerVertical />
      </li>

      <li>
        <Link href="#about">Sobre</Link>
        <RxDividerVertical />
      </li>

      <li>
        <Link href="#services">Serviços</Link>
        <RxDividerVertical />
      </li>

      <li>
        <Link href="#contact">Contato</Link>
      </li>
    </nav>
  );
}

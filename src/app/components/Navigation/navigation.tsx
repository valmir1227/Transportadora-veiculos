import styles from "./styles.module.scss";
import { RxDividerVertical } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <li>
        <a className={styles.active} href="/">
          Home
        </a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="#about">Sobre</a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="#services">Serviços</a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="#contact">Contato</a>
      </li>
    </nav>
  );
}

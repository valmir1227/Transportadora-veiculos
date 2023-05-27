import styles from "./styles.module.scss";
import { RxDividerVertical } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <li>
        <a className={styles.active} href="">
          Inicio
        </a>
        <RxDividerVertical />
      </li>
      <li>
        <a href="">Sobre</a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="">Serviços</a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="">Projetos</a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="">Equipe</a>
        <RxDividerVertical />
      </li>

      <li>
        <a href="">Contato</a>
      </li>
    </nav>
  );
}

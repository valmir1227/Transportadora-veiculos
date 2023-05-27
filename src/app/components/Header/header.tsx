import Image from "next/image";
import React from "react";

import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

import logo from "../../assets/logo.jpg";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="stopcar films logo" />
      </div>
      <nav className={styles.navigation}>
        <a href="/">
          <span>
            <AiOutlineClockCircle size="18px" />
            Horário de funcionamento
          </span>
          <p>seg-sab: 7h às 17h</p>
        </a>
        <a href="mailto:almeidavalmir76@gmail.com?subject=Assunto do Email">
          <span>
            <AiOutlineMail size="18px" />
            E-mail
          </span>
          <p>seuEmail@email.com</p>
        </a>


        <a href="tel: +5533991113641">
          <span>
            <GiSmartphone size="18px" />
            Ligue agora
          </span>
          <p>(33) 99111-3641</p>
        </a>
      </nav>
    </header>
  );
}

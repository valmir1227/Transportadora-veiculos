import Image from "next/image";
import React from "react";

import { GiSmartphone } from "react-icons/gi";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="stopcar films logo" />
      </div>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.openTime}>
          <span>
            <AiOutlineClockCircle size="18px" />
            Horário de funcionamento
          </span>
          <p>seg-sáb: 7h às 18h</p>
        </Link>
        <Link
          href="mailto:jl.socorroauto@gmail.com?subject=Assunto do Email"
          className={styles.email}
        >
          <span>
            <AiOutlineMail size="18px" />
            E-mail
          </span>
          <p>jl.socorroauto@gmail.com</p>
        </Link>

        <Link href="tel: +5531997476378">
          <span>
            <GiSmartphone size="18px" />
            Ligue agora
          </span>
          <p>(31) 99747-6378</p>
        </Link>
      </nav>
    </header>
  );
}

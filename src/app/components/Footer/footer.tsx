import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import styles from "./styles.module.scss";
import { MdOutlineEmail, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";

import logo from "../../assets/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.company}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <p>
        Transporte seu veículo com segurança e confiança na JL Transportes!
Somos especialistas em logística automotiva.
        </p>
        <div className={styles.socialMedia}>
          <Link
            href="https://instagram.com/jltransportes__?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://wa.me/5531997476378?text=Ol%C3%A1%2C+vim+pelo+seu+site.+Poderia+me+ajudar%3F"
            target="_blank"
          >
            <RiWhatsappFill />
          </Link>
        </div>
      </div>

      <div className={styles.ourServices}>
        <h2>Navegação</h2>

        <ul>
          <Link href="/">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Home
            </span>
          </Link>

          <Link href="#about">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Sobre nós
            </span>
          </Link>

          <Link href="#budget">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Orçamento
            </span>
          </Link>

          <Link href="#services">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Serviços
            </span>
          </Link>

          <Link href="#contact">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Contato
            </span>
          </Link>
        </ul>
      </div>

      <div className={styles.contact}>
        <h2>Entre em Contato</h2>

        <ul>
          <li>
            <span>
              <IoLocationOutline size="20px" />
              Localização
            </span>
            <p>demo address 8901 Marmora Road Chi Minh City, Vietnam</p>
          </li>

          <li>
            <span>
              <MdOutlineEmail size="20px" />
              E-mail
            </span>
            <p>jl.socorroauto@gmail.com</p>
          </li>

          <li>
            <span>
              <BsPhone size="20px" />
              Telefone
            </span>

            <p>
              <Link href="tel: +5531997476378">(31) 99747-6378</Link>
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

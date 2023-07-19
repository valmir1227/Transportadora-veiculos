import Image from "next/image";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "./styles.module.scss";
import { MdOutlineEmail, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";

import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.company}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quidem praesentium, lor sit amet consectetur adipisicing elit.
          Possimus, quidem praesentium.
        </p>
        <div className={styles.socialMedia}>
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiOutlineTwitter />
          </a>
          <a href="">
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className={styles.ourServices}>
        <h2>Navegação</h2>

        <ul>
          <a href="/">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Home
            </span>
          </a>

          <a href="#about">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Sobre nós
            </span>
          </a>

          <a href="#budget">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Orçamento
            </span>
          </a>

          <a href="#services">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Serviços
            </span>
          </a>

          <a href="#contact">
            <span>
              <MdOutlineKeyboardArrowRight size="20px" />
              Contato
            </span>
          </a>
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
              <a href="tel: +5531997476378"></a>
              (31) 99747-6378
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

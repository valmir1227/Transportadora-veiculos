"use client";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import About from "./containers/About";
import Home from "./containers/Home";
import Services from "./containers/Services";
import Clients from "./containers/Clients";
import LatestProjects from "./containers/LastProjects";

import styles from "./styles/home.module.scss";

export default function Index() {
  return (
    <main className={styles.main}>
      <Home />
      <About />
      <section id="budget" className={styles.carCare}>
        <p>Faça um orçamento sem compromisso.</p>
        <a
          href="https://wa.me/5531997476378?text=Ol%C3%A1%2C+vim+pelo+seu+site.+Poderia+me+ajudar%3F"
          target="_blank"
        >
          Fazer orçamento
          <FaRegArrowAltCircleRight color="#333" />
        </a>
      </section>
      <Services />
      <LatestProjects />
      <Clients />
    </main>
  );
}

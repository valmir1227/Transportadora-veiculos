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
      <section className={styles.carCare}>
        <p>Faça um orçamento sem compromisso.</p>
        <a href="/orçamento">
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

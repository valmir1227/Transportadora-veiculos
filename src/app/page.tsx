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
        <p>
          Invista no cuidado do seu carro na garagem, e ele lhe proporcionará
          segurança nas estradas.
        </p>
        <a href="/">
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

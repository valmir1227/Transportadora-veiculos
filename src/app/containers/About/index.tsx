import { BsAwardFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";

import styles from "./styles.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.companyOverview}>
        <h2>
          Sobre <span>nós</span>
        </h2>
        <p>Visão geral da empresa </p>
        <main>
          <p>
            Somos uma empresa especializada no transporte de veículos,
            especialmente aqueles provenientes de leilões. Atendemos tanto
            pessoas físicas quanto jurídicas, incluindo locadoras,
            concessionárias e lojistas, oferecendo soluções completas de
            logística automotiva em todo o território nacional.
          </p>
          <p>
            Nossa experiência permite entregas pontuais e eficientes, garantindo
            uma jornada tranquila e livre de preocupações para nossos clientes.
            Nossa missão é simplificar o processo de transporte automotivo,
            cuidando dos veículos de nossos clientes com responsabilidade e
            profissionalismo em cada etapa do caminho.
          </p>
          <p>
            Com uma variedade de opções de transporte disponíveis, somos
            conhecidos por nossa capacidade de atender às necessidades
            específicas de cada cliente. Nossa vasta experiência no transporte
            de veículos de leilões nos permite assegurar entregas pontuais e
            eficientes em qualquer destino desejado.
          </p>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div>
                <FaShippingFast size="30px" color="#ffffff" />
              </div>
              <h4></h4>
              <p>Rapidez</p>
            </div>

            <div className={styles.card}>
              <div>
                <HiBadgeCheck size="30px" color="#ffffff" />
              </div>
              <h4></h4>
              <p>Confiabilidade</p>
            </div>

            <div className={styles.card}>
              <div>
                <BsAwardFill size="30px" color="#ffffff" />
              </div>
              <h4></h4>
              <p>Segurança</p>
            </div>
          </div>
          <p>
            Nossa missão é simplificar o processo de transporte automotivo para
            nossos clientes, permitindo que eles se concentrem em suas
            atividades principais.
          </p>
        </main>
      </div>
    </section>
  );
}

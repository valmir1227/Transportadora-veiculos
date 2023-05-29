"use client";
import { useState } from "react";
import Image from "next/image";

import { IoIosPeople } from "react-icons/io";
import { BsAwardFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import carPolish from "./assets/car-polish.jpg";
import insulfilm from "./assets/insulfilm.jpg";
import insulfilmHome from "./assets/insulfim-2.jpg";
import carWash from "./assets/car-wash.jpg";
import styles from "./styles/home.module.scss";
import Link from "next/link";
import CardService from "./components/service-card/CardService";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className={styles.main}>
      <section id="home" className={styles.home}>
        <div className={styles.text}>
          <h1>Higienização interna de veículos, lavagem e demais serviços.</h1>
          <p>
            Oferecemos uma variedade de serviços para veículos, como a aplicação
            de Insulfilm para vidros automotivos e residenciais, polimento e
            cristalização de pintura para restaurar o brilho e proteger contra
            danos, além da higienização interna completa, garantindo um ambiente
            limpo e confortável.
          </p>
          <a href="#about">Saíba Mais</a>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.buttons}>
          <button
            className={activeSection === "about" ? styles.active : ""}
            onClick={() => handleActiveSection("about")}
          >
            <h3>Sobre nós</h3>
            <p>Historia da empresa</p>
          </button>

          <button
            className={activeSection === "insulfilm" ? styles.active : ""}
            onClick={() => handleActiveSection("insulfilm")}
          >
            <h3>Insulfilm</h3>
            <p>Veicular e residencial</p>
          </button>

          <button
            className={activeSection === "sanitation" ? styles.active : ""}
            onClick={() => handleActiveSection("sanitation")}
          >
            <h3> Higiênização </h3>
            <p> Lavagem e demais</p>
          </button>

          <button
            className={activeSection === "polish" ? styles.active : ""}
            onClick={() => handleActiveSection("polish")}
          >
            <h3>Polimento</h3>
            <p>Cristalização de pintura</p>
          </button>
        </div>

        {activeSection === "about" && (
          <div className={styles.companyOverview}>
            <h2>
              Sobre <span>nós</span>
            </h2>
            <p>Visão geral da empresa </p>
            <main>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                voluptates aliquam ea error magnam, assumenda optio modi
                eligendi. Incidunt cumque obcaecati optio culpa blanditiis, sit
                amet consectetur adipisicing elit. Omnis .vumque obcaecati optio
                culpa blanditiis. Incidunt cumque obcaecati optio culpa
                blanditiis, sit amet consectetur adipisicing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur labore, maxime, quis recusandae voluptate temporibus
                in numquam adipisci quidem consequuntur quas culpa, eveniet
                nulla non magni dolorem nesciunt fugiat eos sunt ut harum
                impedit reprehenderit a? Excepturi quo, fugiat dolorum error
                reiciendis autem aliquid ad debitis, nesciunt ipsa, perspi.
              </p>

              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <div>
                    <IoIosPeople size="30px" color="#ffffff" />
                  </div>
                  <h4>+1800</h4>
                  <p>Clientes atendidos</p>
                </div>

                <div className={styles.card}>
                  <div>
                    <BsAwardFill size="30px" color="#ffffff" />
                  </div>
                  <h4>+3</h4>
                  <p>Premiações</p>
                </div>

                <div className={styles.card}>
                  <div>
                    <MdMiscellaneousServices size="30px" color="#ffffff" />
                  </div>
                  <h4>+1527</h4>
                  <p>Serviços concluídos</p>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                ex commodi consequuntur enim quas perspiciatis iusto
                praesentium, quasi laboriosam harum.
              </p>
            </main>
          </div>
        )}
        {activeSection === "insulfilm" && (
          <div className={styles.insulfilm}>
            <h2>Insulfilm</h2>
            <p>Insulfilm automotivo e residêncial</p>
            <main>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis voluptates aliquam ea error magnam, assumenda optio modi
                  eligendi. Incidunt cumque obcaecati optio culpa blanditiis,
                  sit amet consectetur adipisicing elit. Omnis .vumque obcaecati
                  optio culpa blanditiis. Incidunt cumque obcaecati optio culpa
                  blanditiis, sit amet consectetur adipisicing elit.
                </p>

                <div className={styles.cardContainer}>
                  <div className={styles.card}>
                    <div>
                      <IoIosPeople size="30px" color="#ffffff" />
                    </div>
                    <h4>+1800</h4>
                    <p>Clientes atendidos</p>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <BsAwardFill size="30px" color="#ffffff" />
                    </div>
                    <h4>+3</h4>
                    <p>Premiações</p>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <MdMiscellaneousServices size="30px" color="#ffffff" />
                    </div>
                    <h4>+1527</h4>
                    <p>Serviços concluídos</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ex commodi consequuntur enim quas perspiciatis iusto
                  praesentium, quasi laboriosam harum.
                </p>
              </div>
              <div className={styles.image}>
                <Image src={insulfilm} alt="carro branco sendo polido." />
              </div>
              <div className={styles.image}>
                <Image src={insulfilmHome} alt="carro branco sendo polido." />
              </div>
            </main>
          </div>
        )}
        {activeSection === "sanitation" && (
          <div className={styles.sanitation}>
            <h2>
              Higienização <span>interna</span>
            </h2>
            <p>higienização interna em veículos</p>
            <main>
              <div className={styles.image}>
                <Image src={carWash} alt="carro branco sendo polido." />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis voluptates aliquam ea error magnam, assumenda optio modi
                  eligendi. Incidunt cumque obcaecati optio culpa blanditiis,
                  sit amet consectetur adipisicing elit. Omnis .vumque obcaecati
                  optio culpa blanditiis. Incidunt cumque obcaecati optio culpa
                  blanditiis, sit amet consectetur adipisicing elit.
                </p>

                <div className={styles.cardContainer}>
                  <div className={styles.card}>
                    <div>
                      <IoIosPeople size="30px" color="#ffffff" />
                    </div>
                    <h4>+1800</h4>
                    <p>Clientes atendidos</p>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <BsAwardFill size="30px" color="#ffffff" />
                    </div>
                    <h4>+3</h4>
                    <p>Premiações</p>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <MdMiscellaneousServices size="30px" color="#ffffff" />
                    </div>
                    <h4>+1527</h4>
                    <p>Serviços concluídos</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ex commodi consequuntur enim quas perspiciatis iusto
                  praesentium, quasi laboriosam harum.
                </p>
              </div>
            </main>
          </div>
        )}
        {activeSection === "polish" && (
          <div className={styles.insulfilm}>
            <h2>Polimento</h2>
            <p>Polimento de veículo</p>
            <main>
              <div className={styles.image}>
                <Image src={carPolish} alt="carro branco sendo polido." />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis voluptates aliquam ea error magnam, assumenda optio modi
                  eligendi. Incidunt cumque obcaecati optio culpa blanditiis,
                  sit amet consectetur adipisicing elit. Omnis .vumque obcaecati
                  optio culpa blanditiis. Incidunt cumque obcaecati optio culpa
                  blanditiis, sit amet consectetur adipisicing elit.
                </p>

                <div className={styles.cardContainer}>
                  <div className={styles.card}>
                    <div>
                      <IoIosPeople size="30px" color="#ffffff" />
                    </div>
                    <h4>+1800</h4>
                    <p>Clientes atendidos</p>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <BsAwardFill size="30px" color="#ffffff" />
                    </div>
                    <h4>+3</h4>
                    <p>Premiações</p>
                  </div>

                  <div className={styles.card}>
                    <div>
                      <MdMiscellaneousServices size="30px" color="#ffffff" />
                    </div>
                    <h4>+1527</h4>
                    <p>Serviços concluídos</p>
                  </div>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ex commodi consequuntur enim quas perspiciatis iusto
                  praesentium, quasi laboriosam harum.
                </p>
              </div>
            </main>
          </div>
        )}
      </section>

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

      <section className={styles.services}>
        <div className={styles.heading}>
          <h2>
            Nossos <span>serviços</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industrys standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>

        <main>
          <CardService image="https://img.freepik.com/fotos-gratis/lindo-carro-no-servico-de-lavagem_23-2149212221.jpg?w=1060&t=st=1685326394~exp=1685326994~hmac=ccb07256e9ae4f6ae2fe283ae9ccec31e996c9227dd9973347b972283025f853" />
          <CardService image="https://img.freepik.com/fotos-gratis/close-no-processo-de-cuidado-do-carro_23-2149193568.jpg?size=626&ext=jpg&uid=R37847853&ga=GA1.2.1932660964.1667391834&semt=ais" />
          <CardService image="https://img.freepik.com/fotos-gratis/sedan-azul-esporte-estacionado-no-quintal_114579-5078.jpg?size=626&ext=jpg&uid=R37847853&ga=GA1.2.1932660964.1667391834&semt=sph" />
          <CardService image="https://img.freepik.com/fotos-gratis/homem-polindo-o-interior-do-carro-no-servico-de-atendimento_1303-26882.jpg?size=626&ext=jpg&uid=R37847853&ga=GA1.2.1932660964.1667391834&semt=ais" />
          <CardService image="https://img.freepik.com/fotos-gratis/lindo-carro-no-servico-de-lavagem_23-2149212221.jpg?w=1060&t=st=1685326394~exp=1685326994~hmac=ccb07256e9ae4f6ae2fe283ae9ccec31e996c9227dd9973347b972283025f853" />
          <CardService image="https://img.freepik.com/fotos-gratis/lindo-carro-no-servico-de-lavagem_23-2149212221.jpg?w=1060&t=st=1685326394~exp=1685326994~hmac=ccb07256e9ae4f6ae2fe283ae9ccec31e996c9227dd9973347b972283025f853" />
        </main>
      </section>
    </main>
  );
}

import Image from "next/image";
import { useState } from "react";

import { IoIosPeople } from "react-icons/io";
import { BsAwardFill } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import carPolish from "../../assets/car-polish.jpg";
import insulfilm from "../../assets/insulfilm.jpg";
import insulfilmHome from "../../assets/insulfim-2.jpg";
import carWash from "../../assets/car-wash.jpg";

import styles from "./styles.module.scss";
export default function About() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return (
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
              voluptates aliquam ea error magnam, assumenda optio modi eligendi.
              Incidunt cumque obcaecati optio culpa blanditiis, sit amet
              consectetur adipisicing elit. Omnis .vumque obcaecati optio culpa
              blanditiis. Incidunt cumque obcaecati optio culpa blanditiis, sit
              amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur labore, maxime, quis recusandae voluptate temporibus in
              numquam adipisci quidem consequuntur quas culpa, eveniet nulla non
              magni dolorem nesciunt fugiat eos sunt ut harum impedit
              reprehenderit a? Excepturi quo, fugiat dolorum error reiciendis
              autem aliquid ad debitis, nesciunt ipsa, perspi.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ex
              commodi consequuntur enim quas perspiciatis iusto praesentium,
              quasi laboriosam harum.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                voluptates aliquam ea error magnam, assumenda optio modi
                eligendi. Incidunt cumque obcaecati optio culpa blanditiis, sit
                amet consectetur adipisicing elit. Omnis .vumque obcaecati optio
                culpa blanditiis. Incidunt cumque obcaecati optio culpa
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                voluptates aliquam ea error magnam, assumenda optio modi
                eligendi. Incidunt cumque obcaecati optio culpa blanditiis, sit
                amet consectetur adipisicing elit. Omnis .vumque obcaecati optio
                culpa blanditiis. Incidunt cumque obcaecati optio culpa
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                voluptates aliquam ea error magnam, assumenda optio modi
                eligendi. Incidunt cumque obcaecati optio culpa blanditiis, sit
                amet consectetur adipisicing elit. Omnis .vumque obcaecati optio
                culpa blanditiis. Incidunt cumque obcaecati optio culpa
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
  );
}

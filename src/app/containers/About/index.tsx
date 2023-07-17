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
  return (
    <section id="about" className={styles.about}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            labore, maxime, quis recusandae voluptate temporibus in numquam
            adipisci quidem consequuntur quas culpa, eveniet nulla non magni
            dolorem nesciunt fugiat eos sunt ut harum impedit reprehenderit a?
            Excepturi quo, fugiat dolorum error reiciendis autem aliquid ad
            debitis, nesciunt ipsa, perspi.
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
            commodi consequuntur enim quas perspiciatis iusto praesentium, quasi
            laboriosam harum.
          </p>
        </main>
      </div>
    </section>
  );
}

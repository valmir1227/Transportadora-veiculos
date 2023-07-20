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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ex
            commodi consequuntur enim quas perspiciatis iusto praesentium, quasi
            laboriosam harum.
          </p>
        </main>
      </div>
    </section>
  );
}

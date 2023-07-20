import Link from "next/link";
import styles from "./styles.module.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.text}>
        <h1>Transporte seu veículo com segurança e confiabilidade.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum
          expedita praesentium vel et, ipsa quas non officiis <br />
          minus quod at totam eum? Minus blanditiis itaque.
        </p>
        <Link
          href="https://wa.me/5531997476378?text=Ol%C3%A1%2C+vim+pelo+seu+site.+Poderia+me+ajudar%3F"
          target="_blank"
        >
          Fazer orçamento
        </Link>
      </div>
      <Link
        className={styles.wppBtn}
        href="https://wa.me/5531997476378?text=Ol%C3%A1%2C+vim+pelo+seu+site.+Poderia+me+ajudar%3F"
        target="_blank"
      >
        <AiOutlineWhatsApp color="#e71d36" size="40px" />
      </Link>
    </section>
  );
}

import CardService from "@/app/components/service-card/CardService";
import cegonha from "../../assets/cegonha.jpg";
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.heading}>
        <h2>
          Nossos <span>serviços</span>
        </h2>
        <p>
          Estamos prontos para superar suas expectativas e garantir que seu
          veículo chegue ao seu destino com total segurança e pontualidade.
          Conte conosco para tornar seu transporte de veículos uma jornada
          tranquila e bem-sucedida!
        </p>
      </div>

      <main>
        <CardService description="Serviço 1" image={cegonha} />
        <CardService description="Serviço 2" image={cegonha} />
        <CardService description="Serviço 3" image={cegonha} />
      </main>
    </section>
  );
}

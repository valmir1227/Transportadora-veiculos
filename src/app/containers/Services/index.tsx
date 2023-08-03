import CardService from "@/app/components/service-card/CardService";
import cegonha from "../../assets/cegonha.jpg";
import moto from "../../assets/moto.jpg";
import carro from "../../assets/service1.jpeg";
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
        <CardService
          title="Transporte de motos"
          description="Oferecemos serviços de transporte de motos utilizando caminhão cegonha ou
           guincho, atendendo diversas demandas. Somos a escolha ideal para pessoa física, pessoa 
           jurídica, locadoras, montadoras e também para aqueles que possuem motos 0km, motos Custom,
            motos Street e motos de leilão."
          image={moto}
        />
        <CardService
          title="Transporte de Carros"
          description="Somos uma transportadora experiente, especializada em caminhão cegonha ou 
          guincho, atendendo pessoas físicas, jurídicas, locadoras, montadoras, veículos usados, 
          veículos novos zero km e carros de leilão."
          image={carro}
        />
        <CardService
          title="Transporte de Cegonha"
          description="Somos uma transportadora especializada no transporte de veículos utilizando 
          caminhão cegonha, uma opção coletiva e compartilhada de transporte de carros com carreta.
           Nossa capacidade permite transportar de 9 a 11 veículos em cada viagem, garantindo uma 
           opção eficiente e econômica para nossos clientes."
          image={cegonha}
        />
      </main>
    </section>
  );
}

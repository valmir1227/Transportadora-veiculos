import CardService from "@/app/components/service-card/CardService";
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
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
        <CardService
          description="Tranporte de carros"
          image="https://img.freepik.com/fotos-gratis/lindo-carro-no-servico-de-lavagem_23-2149212221.jpg?w=1060&t=st=1685326394~exp=1685326994~hmac=ccb07256e9ae4f6ae2fe283ae9ccec31e996c9227dd9973347b972283025f853"
        />
        <CardService
          description="Polimento"
          image="https://img.freepik.com/fotos-gratis/close-no-processo-de-cuidado-do-carro_23-2149193568.jpg?size=626&ext=jpg&uid=R37847853&ga=GA1.2.1932660964.1667391834&semt=ais"
        />
        <CardService
          description="Decrição serviço 3"
          image="https://img.freepik.com/fotos-gratis/sedan-azul-esporte-estacionado-no-quintal_114579-5078.jpg?size=626&ext=jpg&uid=R37847853&ga=GA1.2.1932660964.1667391834&semt=sph"
       />
      </main>
    </section>
  );
}

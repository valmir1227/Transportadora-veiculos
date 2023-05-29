import CardService from "@/app/components/service-card/CardService";
import styles from "./styles.module.scss";

export default function Services() {
  return (
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
        <CardService
          description="Lavagem"
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
        <CardService
          description="Higienização Interna"
          image="https://img.freepik.com/fotos-gratis/homem-polindo-o-interior-do-carro-no-servico-de-atendimento_1303-26882.jpg?size=626&ext=jpg&uid=R37847853&ga=GA1.2.1932660964.1667391834&semt=ais"
        />
        <CardService
          description="Insulfilm"
          image="https://img.freepik.com/fotos-gratis/salao-de-servico-automatico-doign-embrulho-de-carro_23-2149593834.jpg?w=1060&t=st=1685390510~exp=1685391110~hmac=000dfff5faaa83a8839ad1f0dc4108b56e4e302c0252da4e144bf235c67c2084"
        />
        <CardService
          description="Insulfilm Residêncial"
          image="https://img.freepik.com/fotos-gratis/reparacao-de-trabalhador-de-manutencao-de-servico_23-2149176712.jpg?w=1060&t=st=1685390650~exp=1685391250~hmac=c7ad937c7d09b3091d4010cd1c580ab96b25220ed18b308754faac35ee348dc2"
        />
      </main>
    </section>
  );
}

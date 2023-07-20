import Image from "next/image";

import styles from "./styles.module.scss";

export default function Clients() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contact}>
        <div>
          <h2>
            Entre em <span>contato</span>
          </h2>
          <p>
            Estamos empolgados para ouvir de você e oferecer os melhores
            serviços de transporte de veículos disponíveis no mercado. Nossa
            equipe altamente dedicada está pronta para ajudá-lo em todas as
            etapas do processo, desde fornecer informações detalhadas sobre
            nossos serviços até resolver quaisquer dúvidas ou preocupações que
            você possa ter.
          </p>
          <form>
            <strong>Envie-nos uma mensagem</strong>
            <div className={styles.inputGroup}>
              <div>
                <input type="text" placeholder="Seu Nome" />
                <input type="text" placeholder="E-mail" />
              </div>
              <div>
                <input type="tel" placeholder="Telefone" />
                <input type="text" placeholder="Assunto" />
              </div>
            </div>
            <textarea rows={7} placeholder="Sua Mensagem..."></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles.customers}>
        <div>
          <h2>
            Opnião dos
            <span> clientes</span>
          </h2>

          <p>
            Nossos clientes são a base do nosso sucesso, e suas opiniões e
            comentários são inestimáveis para nós. Apreciamos cada palavra
            compartilhada e valorizamos o tempo dedicado para nos contar sobre
            sua jornada conosco.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.customer}>
            <Image
              src="https://img.freepik.com/fotos-gratis/homem-consideravel-que-bebe-ao-ar-livre-o-cafe-com-oculos-de-sol-um-cara-com-barba-efeito-instagram_1212-819.jpg?w=1060&t=st=1685376407~exp=1685377007~hmac=42bbb346c348f394c552535e9d52bc3796e0862cddeb6209c400a2cff53d4ec7"
              alt=""
              width={200}
              height={200}
            />

            <div>
              <strong>Jhon Doe</strong>
              <p>Cliente</p>
            </div>
          </div>

          <p>
            Recomendo sem dúvida alguma! Sempre confio meus veículos de leilão a
            essa transportadora e nunca tive problemas. Eles têm sido
            consistentemente confiáveis, cuidadosos e pontuais em todas as
            minhas remessas. Se você precisa transportar um veículo com
            segurança e tranquilidade, essa é a escolha certa!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.customer}>
            <Image
              src="https://img.freepik.com/fotos-gratis/foto-vertical-de-um-homem-afro-americano-atraente-posando-e-sorrindo_181624-15027.jpg?w=360&t=st=1685376446~exp=1685377046~hmac=1ec56426c137c89c1014d19e8a0e79a9b67692cc76e68a910f415ea7704f38fe"
              alt=""
              width={200}
              height={200}
            />

            <div>
              <strong>Jhon Doe</strong>
              <p>Cliente</p>
            </div>
          </div>

          <p>
            Excelente serviço! Eu estava preocupado em confiar meu carro a uma
            transportadora, mas eles me deixaram completamente à vontade. A
            equipe demonstrou profissionalismo e conhecimento em lidar com
            veículos de alto valor.
          </p>
        </div>
      </div>
    </section>
  );
}

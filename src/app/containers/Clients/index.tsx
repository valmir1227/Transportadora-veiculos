import Image from "next/image";

import styles from "./styles.module.scss";

export default function Clients() {
  return (
    <section className={styles.section}>
      <div className={styles.contact}>
        <div>
          <h2>
            Entre em <span>contato</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae repellendus exercitationem id...
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            laborum nihil voluptatem ad dicta pariatur veritatis.
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
              <p>Programador</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            suscipit est quia dignissimos officiis qui enim, commodi numquam
            nulla ipsa ipsam, cupiditate a excepturi quam. Quos, aliquam eveniet
            laborum voluptatum omnis iure quas provident quidem voluptates nemo
            recusandae aspernatur.
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
              <p>Programador</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            suscipit est quia dignissimos officiis qui enim, commodi numquam
            nulla ipsa ipsam, cupiditate a excepturi quam. Quos, aliquam eveniet
            laborum voluptatum omnis iure quas provident quidem voluptates nemo
            recusandae aspernatur. Placeat iusto dolor ut amet pariatur quod
            iste repellendus facilis atque omnis eum inventore soluta sapiente
            quaerat, voluptas repellat exercitationem perspiciatis aliquid
            possimus.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.customer}>
            <Image
              src="https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2575.jpg?w=1060&t=st=1685376336~exp=1685376936~hmac=5ca10d5006488ad800d6d7dd9c997b171c376d21d4766dde3373119a9895ef97"
              alt=""
              width={200}
              height={200}
            />

            <div>
              <strong>Jane Doe</strong>
              <p>Programador</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            suscipit est quia dignissimos officiis qui enim, commodi numquam
            nulla ipsa ipsam.
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
              <p>Programador</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            suscipit est quia dignissimos officiis qui enim, commodi numquam
            nulla ipsa ipsam, cupiditate a excepturi quam. Quos, aliquam eveniet
            laborum voluptatum omnis iure quas provident quidem voluptates nemo
            recusandae aspernatur.
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
              <p>Programador</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            suscipit est quia dignissimos officiis qui enim, commodi numquam
            nulla ipsa ipsam, cupiditate a excepturi quam. Quos, aliquam eveniet
            laborum voluptatum omnis iure quas provident quidem voluptates nemo
            recusandae aspernatur. Placeat iusto dolor ut amet pariatur quod
            iste repellendus facilis atque omnis eum inventore soluta sapiente
            quaerat, voluptas repellat exercitationem perspiciatis aliquid
            possimus.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.customer}>
            <Image
              src="https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-magnifica-com-grandes-olhos-castanhos-e-um-sorriso-incrivel_291049-2575.jpg?w=1060&t=st=1685376336~exp=1685376936~hmac=5ca10d5006488ad800d6d7dd9c997b171c376d21d4766dde3373119a9895ef97"
              alt=""
              width={200}
              height={200}
            />

            <div>
              <strong>Jane Doe</strong>
              <p>Programador</p>
            </div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            suscipit est quia dignissimos officiis qui enim, commodi numquam
            nulla ipsa ipsam.
          </p>
        </div>
      </div>
    </section>
  );
}

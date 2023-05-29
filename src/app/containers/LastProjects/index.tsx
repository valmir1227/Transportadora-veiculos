import Image from "next/image";
import styles from "./styles.module.scss";

import mecanic from "../../assets/mecanic.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function LatestProjects() {
  return (
    <section className={styles.latestProjects}>
      <div className={styles.leftSection}>
        <div className={styles.text}>
          <h2>Últimos trabalhos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iu.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={mecanic} alt="" width={400} height={400} />
        </div>
      </div>
      <main className={styles.content}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image
                  src="https://img.freepik.com/fotos-gratis/detalhes-do-automovel-close-up-do-carro-novo_1303-26484.jpg?w=360&t=st=1685369177~exp=1685369777~hmac=d5ff3c5c798f3450dd457636cfa9b66e66bd03367ba827b483be7a1d0bf69ef3"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.serviceDescription}>
                <h3>Polimento</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci illum quia doloremque quisquam explicabo.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image
                  src="https://img.freepik.com/fotos-gratis/lavadora-profissional-em-uniforme-azul-lavando-carro-de-luxo-com-pistola-de-agua-em-um-lava-jato-a-ceu-aberto_496169-333.jpg?w=1060&t=st=1685369198~exp=1685369798~hmac=b323f723568ee3c0890feeecd6b7da97ba617add98420745ac8171f8e7fbdade"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.serviceDescription}>
                <h3>Lavagem</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci illum quia doloremque quisquam explicabo.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image
                  src="https://img.freepik.com/fotos-gratis/mecanico-de-automoveis-trocando-as-rodas-do-carro_1303-26653.jpg?w=1060&t=st=1685369238~exp=1685369838~hmac=1a90f6dbb4a404531e8bb22e4fdeedf150729b7466858a2584f07545dae675e0"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.serviceDescription}>
                <h3>Descrição do serviço 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci illum quia doloremque quisquam explicabo.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image
                  src="https://img.freepik.com/fotos-gratis/mulher-desfrutando-de-sua-independencia-financeira-ao-comprar-carro_23-2149434338.jpg?w=1060&t=st=1685369301~exp=1685369901~hmac=39701395b12bb177dc29ff84f476050a530038ceb52d62e76e6ec45389874f5d"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.serviceDescription}>
                <h3>Estética Automotiva</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci illum quia doloremque quisquam explicabo.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image
                  src="https://img.freepik.com/fotos-gratis/homem-lavando-o-carro-em-uma-garagem_1157-26072.jpg?w=1060&t=st=1685369356~exp=1685369956~hmac=b05a00e3cd8081f5de26bad7c38d91e4349907b9bdfc0f422af9b4239c85d93f"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.serviceDescription}>
                <h3>Limpeza Interna</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci illum quia doloremque quisquam explicabo.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  );
}

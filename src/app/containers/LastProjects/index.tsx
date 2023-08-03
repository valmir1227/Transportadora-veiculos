import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import service1 from "../../assets/service1.jpeg";
import service2 from "../../assets/service2.jpeg";
import service3 from "../../assets/service3.jpeg";
import styles from "./styles.module.scss";

export default function LatestProjects() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  let slidesPerView = 3; // Default desktop

  if (isMobile) {
    slidesPerView = 1.2;
  } else if (isTablet) {
    slidesPerView = 2.2;
  }

  return (
    <section id="gallery" className={styles.latestProjects}>
      <main className={styles.content}>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={10}
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
                <Image src={service1} alt="" width={400} height={400} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image src={service2} alt="" width={400} height={400} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image src={service3} alt="" width={400} height={400} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image src={service1} alt="" width={400} height={400} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className={styles.image}>
                <Image src={service2} alt="" width={400} height={400} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  );
}

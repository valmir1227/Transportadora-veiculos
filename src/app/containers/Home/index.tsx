import styles from "./styles.module.scss";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.text}>
        <h1>Higienização interna de veículos, lavagem e demais serviços.</h1>
        <p>
          Oferecemos uma variedade de serviços para veículos, como a aplicação
          de Insulfilm para vidros automotivos e residenciais, polimento e
          cristalização de pintura para restaurar o brilho e proteger contra
          danos, além da higienização interna completa, garantindo um ambiente
          limpo e confortável.
        </p>
        <a href="#about">Saíba Mais</a>
      </div>
    </section>
  );
}

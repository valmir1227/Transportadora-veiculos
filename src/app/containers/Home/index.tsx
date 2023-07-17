import styles from "./styles.module.scss";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.text}>
        <h1>Transporte seu veículo com segurança e qualidade.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ipsum
          expedita praesentium vel et, ipsa quas non officiis <br />
          minus quod at totam eum? Minus blanditiis itaque.
        </p>
        <a href="#about">Saíba Mais</a>
      </div>
    </section>
  );
}

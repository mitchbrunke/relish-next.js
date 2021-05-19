import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.title}>
          <h1>Welcome to the 2021 Relish Food & Wine Festival</h1>
        </div>
      </div>

      <section className={styles.info}>
        <div className={styles.right_half}>
          <h2>
            Enjoy local food, regional wines, beers and fabulous music in the
            Mary River Parklands.
          </h2>

          <p>
            The 8th annual Relish Food & Wine Festival will be returning to the
            Mary River Parklands and Queen’s Park in 2021. Maryborough's
            heritage streetscapes and riverside parks are the perfect setting
            for a feast of local cuisine serving up celebrity and local chefs,
            gourmet tastings, cooking workshops, live music and more. Drop in on
            local regional wineries for a delightful tasting experience and
            sample the finest seasonal produce grown in the Fraser Coast's and
            surrounds idyllic natural environment.
          </p>
        </div>
      </section>
    </div>
  );
}

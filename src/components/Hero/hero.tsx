import type { ReactElement } from "react";

import Button from "../Button/button.tsx";

import styles from "./hero.module.css";

function Hero(): ReactElement {
  return (
    <div className={styles.hero}>
      <div className={styles["background-image"]}>
        <img src={"../.././assets/images/hero.png"} alt={"Hero Image"} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.writings}>
        <h1>Effortless Logistics, Every Step of the Way.</h1>
        <p>
          Manage your shipments, track in real-time, and get the best rates—all
          from one platform.
        </p>
        <div className={styles.actions}>
          <Button variant={"solid"}>Get a Free Quote</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

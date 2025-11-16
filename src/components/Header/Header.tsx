import type { ReactElement } from "react";

import Button from "../Button/button.tsx";

import styles from "./Header.module.css";

export function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={"./public/assets/logos/Logo.svg"} alt={"Aerogix Logo"} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Track Shipment</a>
          </li>
          <li>
            <a href="#">About US</a>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <Button variant={"solid"}>Log In</Button>
        <Button variant={"outline"}>Sign Up</Button>
      </div>
    </header>
  );
}

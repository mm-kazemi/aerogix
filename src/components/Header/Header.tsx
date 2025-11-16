import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
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
      <div className="actio">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

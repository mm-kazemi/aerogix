import type { ReactElement } from "react";

import styles from "./ServiceCard.module.css";

type Props = {
  icon: ReactElement;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: Props): ReactElement {
  return (
    <div className={styles["service-card"]}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default ServiceCard;

import { type PropsWithChildren, type ReactElement } from "react";

import styles from "./button.module.css";
import clsx from "clsx";

export type Variant = "solid" | "outline";

type Props = PropsWithChildren & {
  variant: Variant;
};

function Button({ children, variant = "solid" }: Props): ReactElement {
  return (
    <button className={clsx(styles.button, styles[variant])}>{children}</button>
  );
}

export default Button;

import {type ComponentProps, type ReactElement} from "react";

import styles from "./button.module.css";
import clsx from "clsx";

export type Variant = "solid" | "outline";

type Props = ComponentProps<"button"> & {
  variant: Variant;
};

function Button({className ,children, variant = "solid", ...rest }: Props): ReactElement {
  return (
    <button className={clsx(className, styles.button, styles[variant])} {...rest}>{children}</button>
  );
}

export default Button;

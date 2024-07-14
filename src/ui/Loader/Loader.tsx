import { default as React } from "react";
import { FC } from "react";
import styles from "./Loader.css";

export interface ILoaderProps {
  color?: "blue" | "white";
}

export const Loader: FC<ILoaderProps> = ({ color = "blue" }) => {
  return (
    <div className={styles.loader} data-color={color}>
      <div className={styles.loader__segment} />
      <div className={styles.loader__segment} />
      <div className={styles.loader__segment} />
    </div>
  );
};

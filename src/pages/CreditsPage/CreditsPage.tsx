import { default as React, FC } from "react";
import styles from "./creditspage.css";
import { fetchCredits } from "@api/Credit";

export const CreditsPage: FC = () => {
  return (
    <div className={styles.creditsPage}>
      <div className="container">Hello</div>
    </div>
  );
};

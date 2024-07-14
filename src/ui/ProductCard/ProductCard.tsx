import { default as React, FC } from "react";
import styles from "./productcard.css";
import defaultImg from "@assets/img/no-poster.jpg";

interface ProductCardProps {
  bankLogoUrl: string;
  bankName: string;
  productAmount: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  bankLogoUrl,
  bankName,
  productAmount,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productDescr}>
        <img
          src={bankLogoUrl ?? defaultImg}
          alt="bank logo"
          className={styles.bankLogo}
        />
        <h3 className={styles.bankName}>{bankName}</h3>
      </div>
      <div className={styles.productAmount}>
        <span className={styles.summ}>Сумма</span>
        <span className={styles.amount}>
          {Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0,
          }).format(productAmount)}
        </span>
      </div>
    </div>
  );
};

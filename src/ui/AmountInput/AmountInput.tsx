import { default as React, FC } from "react";
import styles from "./amountinput.css";
import { Input } from "@mui/material";

interface AmountInputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AmountInput: FC<AmountInputProps> = ({ value, onChange }) => {
  return (
    <Input
      className={styles.amountInput}
      type="number"
      disableUnderline
      placeholder="Сумма кредита"
      value={value === 0 ? "" : value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    />
  );
};

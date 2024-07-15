import { default as React, FC } from "react";
import styles from "./amountinput.css";
import { Input } from "@mui/material";

interface AmountInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AmountInput: FC<AmountInputProps> = ({ onChange }) => {
  return (
    <Input
      className={styles.amountInput}
      type="text"
      disableUnderline
      placeholder="Сумма кредита"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    />
  );
};

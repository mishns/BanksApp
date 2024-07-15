import { default as React, FC } from "react";
import styles from "./amountinput.css";
import { Input } from "@mui/material";

interface AmountInputProps {
  defaultValue?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AmountInput: FC<AmountInputProps> = ({
  defaultValue,
  onChange,
}) => {
  return (
    <Input
      className={styles.amountInput}
      type="text"
      disableUnderline
      defaultValue={defaultValue === 0 ? null : defaultValue}
      placeholder="Сумма кредита"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
    />
  );
};

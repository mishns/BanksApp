import { default as React, FC } from "react";
import styles from "./sortselect.css";
import { Select, SelectChangeEvent } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

interface SortSelectProps {
  children: React.ReactNode;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
}

export const SortSelect: FC<SortSelectProps> = ({
  children,
  value,
  onChange,
}) => {
  return (
    <Select
      className={styles.sortSelect}
      labelId="sortSelectLabel"
      id="sortSelect"
      value={value}
      IconComponent={UnfoldMoreIcon}
      variant="standard"
      disableUnderline={true}
      displayEmpty
      renderValue={() => <span>Сортировать</span>}
      onChange={e => onChange(e)}
    >
      {children}
    </Select>
  );
};

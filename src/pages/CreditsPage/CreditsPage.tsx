import { default as React, FC, useState, useEffect } from "react";
import styles from "./creditspage.css";
import uniqid from "uniqid";
import { fetchCredits } from "@api/Credit";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@api/queryClient";
import { ProductCard } from "@ui/ProductCard";
import { Loader } from "@ui/Loader";
import { Product } from "@api/Credit";
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { SocialGroup } from "@ui/SocialGroup";
import { SortSelect } from "@ui/SortSelect";
import { AmountInput } from "@ui/AmountInput";

function getProductCards(productList: Array<Product> | undefined) {
  return productList?.map(product => (
    <ProductCard
      key={uniqid()}
      bankLogoUrl={product.logo}
      bankName={product.name}
      productAmount={product.amount}
    />
  ));
}

export const CreditsPage: FC = () => {
  const { data: creditsData, isFetching } = useQuery(
    { queryFn: fetchCredits, queryKey: ["creditsList"] },
    queryClient,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [minAmount, setMinAmount] = useState<number>(
    creditsData?.filter.amount ?? +searchParams.get("minAmount")! ?? 0,
  );
  const [sortOrder, setSortOrder] = useState<string>(
    searchParams?.get("sortOrder") ?? "1",
  );

  // Save state using url search params
  useEffect(() => {
    const searchParams = new URLSearchParams(
      `minAmount=${minAmount}&sortOrder=${sortOrder}`,
    );
    setSearchParams(searchParams);
  }, [minAmount, sortOrder]);

  function handleAmountInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMinAmount(Number(e.target.value));
  }

  function handleSortChange(e: SelectChangeEvent) {
    setSortOrder(e.target.value);
  }

  // Filter products according to min credit amount
  const filteredProducts = creditsData?.products.filter(
    product => product.amount >= minAmount,
  );

  // Generate products components dom
  const productCards = getProductCards(filteredProducts);

  return (
    <div className={styles.creditsPage}>
      <Container
        sx={{ display: "flex" }}
        className={styles.creditsContainer}
        maxWidth="xs"
      >
        <SocialGroup />
        <FormControl className={styles.filterForm} fullWidth>
          <Box className={styles.amountInputBlock}>
            <AmountInput
              defaultValue={minAmount}
              onChange={handleAmountInputChange}
            />
          </Box>
          <SortSelect defaultValue={sortOrder} onChange={handleSortChange}>
            <MenuItem value="1">По минимальной сумме</MenuItem>
            <MenuItem value="-1">По максимальной сумме</MenuItem>
          </SortSelect>
        </FormControl>
        {isFetching ? (
          <Loader />
        ) : (
          <div className={styles.productList}>
            {sortOrder === "-1" ? productCards?.reverse() : productCards}
          </div>
        )}
      </Container>
    </div>
  );
};

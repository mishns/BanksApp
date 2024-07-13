import { validateResponse } from "@api/validateResponse";
import { API_URL } from "@constants/*";
import { z } from "zod";

const CREDITS_URL = `${API_URL}/credits`;

const productSchema = z.object({
  amount: z.number(),
  name: z.string(),
  logo: z.string(),
});
export type Product = z.infer<typeof productSchema>;

const productListSchema = z.array(productSchema);
export type ProductList = z.infer<typeof productListSchema>;

const filterSchema = z.object({ amount: z.number().nullable() });

const creditsSchema = z.object({
  filter: filterSchema,
  products: productListSchema,
});

export type Credits = z.infer<typeof creditsSchema>;

export function fetchCredits() {
  return fetch(CREDITS_URL)
    .then(validateResponse)
    .then(response => response.json())
    .then(data => creditsSchema.parse(data));
}

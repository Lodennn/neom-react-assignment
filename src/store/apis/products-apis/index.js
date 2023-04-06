import mainApi from "..";

const productsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `products`,
      }),
    }),
    searchProducts: builder.query({
      query: (searchValue) => ({
        url: `products/search?q=${searchValue}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazySearchProductsQuery } = productsApi;

export default productsApi;

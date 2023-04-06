import mainApi from "..";

const productsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `products`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

export default productsApi;

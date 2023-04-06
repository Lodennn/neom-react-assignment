import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),

  endpoints: (builder) => ({}),
});

export default mainApi;

import mainApi from "..";

const loginApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `auth/login`,
        body,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;

export default loginApi;

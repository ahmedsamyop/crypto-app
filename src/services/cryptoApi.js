import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createApiHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_API_HOST,
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createReq = (url) => ({ url, headers: createApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createReq(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createReq(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createReq(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createReq("/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;

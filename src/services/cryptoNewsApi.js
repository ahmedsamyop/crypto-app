import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_NEWS_API_HOST,
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createReq = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewApi = createApi({
  reducerPath: 'cryptoNewApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (bulider) => ({
    getCryptosNews: bulider.query({
      query: ({ newsCategory, counter }) =>
        createReq(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${counter}`,
        ),
    }),
  }),
})

export const { useGetCryptosNewsQuery } = cryptoNewApi

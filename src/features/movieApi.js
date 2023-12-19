import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, baseUrl } from './constants';


const m = () => {
  return {};
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: api_key
    }
  }),
  endpoints: (builder) => ({


    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,

      })
    }),

    getSearchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        params: {
          query: query
        }
      })
    }),


    getMovieDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
      })
    }),

    getMovieVideo: builder.query({
      query: (query) => ({
        url: `/movie/${query}/videos`,
      })
    }),


  })
});


export const {
  useGetMovieByCategoryQuery,
  useGetMovieDetailQuery,
  useGetSearchMovieQuery,
  useGetMovieVideoQuery
} = movieApi;
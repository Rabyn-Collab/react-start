import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, baseUrl } from './constants';



export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl, headers: {
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


  })
});


export const { useGetMovieByCategoryQuery, useGetSearchMovieQuery } = movieApi;
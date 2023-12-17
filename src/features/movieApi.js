import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, baseUrl } from './constants';



export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({


    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        headers: {
          Authorization: api_key
        }
      })
    }),


  })
});


export const { useGetMovieByCategoryQuery } = movieApi;
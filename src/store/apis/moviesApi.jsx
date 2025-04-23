import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    fetchPopularMovies: builder.query({
      query: () => {
        return {
          url: "movie/popular",
          params: {
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
    fetchHighestRatedMovies: builder.query({
      query: () => {
        return {
          url: "movie/top_rated",
          params: {
            sort_by: "vote_average.desc",
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
    fetchSearchMovie: builder.query({
      query: (searchTerm) => {
        return {
          url: "search/movie",
          params: {
            query: searchTerm,
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
    fetchUpcomingMovies: builder.query({
      query: () => {
        return {
          url: "movie/upcoming",
          params: {
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
    fetchPopularTvShows: builder.query({
      query: () => {
        return {
          url: "tv/popular",
          params: {
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
    fetchHighestRatedTvShows: builder.query({
      query: () => {
        return {
          url: "tv/top_rated",
          params: {
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
    fetchTrailer: builder.query({
      query: (id) => {
        return {
          url: `movie/${id}/videos`,
          params: {
            api_key: API_KEY,
          },
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useFetchPopularMoviesQuery,
  useFetchHighestRatedMoviesQuery,
  useFetchSearchMovieQuery,
  useFetchUpcomingMoviesQuery,
  useFetchHighestRatedTvShowsQuery,
  useFetchPopularTvShowsQuery,
  useFetchTrailerQuery,
} = moviesApi;
export { moviesApi };

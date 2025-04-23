import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./apis/moviesApi";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);

export {
  useFetchPopularMoviesQuery,
  useFetchHighestRatedMoviesQuery,
  useFetchSearchMovieQuery,
  useFetchUpcomingMoviesQuery,
  useFetchHighestRatedTvShowsQuery,
  useFetchPopularTvShowsQuery,
  useFetchTrailerQuery,
} from "./apis/moviesApi";
export { changeSearchTerm } from "./slices/searchSlice";

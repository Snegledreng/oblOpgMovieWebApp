import { useFetchHighestRatedMoviesQuery } from "../store";
import MovieCard from "./MovieCard";

function HighestRatedMovies() {
  const { data, error, isFetching } = useFetchHighestRatedMoviesQuery();

  let content;
  if (isFetching) {
    content = <div>Loading;</div>;
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results
      .filter((movie) => movie.poster_path !== null && movie.vote_average !== 0)
      .map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      });
  }
  return (
    <div className="fixed-grid has-6-cols">
      <div className="grid">{content}</div>
    </div>
  );
}
export default HighestRatedMovies;

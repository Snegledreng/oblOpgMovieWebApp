import { useFetchUpcomingMoviesQuery } from "../store";
import MovieCard from "./MovieCard";

function UpcomingMovies() {
  const { data, error, isFetching } = useFetchUpcomingMoviesQuery();

  let content;
  if (isFetching) {
    content = <div>Loading;</div>;
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((movie) => {
      return <MovieCard key={movie.id} movie={movie} />;
    });
  }
  return (
    <div className="fixed-grid has-6-cols">
      <div className="grid">{content}</div>
    </div>
  );
}
export default UpcomingMovies;

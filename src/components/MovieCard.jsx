import { useFetchTrailerQuery } from "../store";

function MovieCard({ movie }) {
  const posterUrl = "https://image.tmdb.org/t/p/original/";
  const { data: trailerData, error, isFetching } = useFetchTrailerQuery(movie.id);

  const handleTrailerClick = () => {
    if (trailerData && trailerData.results.length > 0) {
      const videoKey = trailerData.results[0].key;
      window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
    } else {
      alert("Trailer not available.");
    }
  };

  return (
    <div className="cell">
      <div className="card is-flex is-flex-direction-column is-align-items-stretch">
        <div className="card-image">
          <figure className="image">
            <img src={posterUrl + movie.poster_path} alt={movie.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{movie.title}</p>
            <div className="subtitle is-6">Release: {movie.release_date}</div>
            Rating: {movie.vote_average}/10
          </div>
          <br />
          <div className="content">
            {movie.overview.substring(0, 100).concat("...")}
          </div>
          <div>
            <button
              className={`button is-primary is-rounded ${
                isFetching ? "is-loading" : ""
              }`}
              onClick={handleTrailerClick}
              disabled={isFetching || error}
            >
            Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

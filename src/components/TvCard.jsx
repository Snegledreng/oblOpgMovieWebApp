function TvCard({ show }) {
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    return (
      <div className="cell">
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={posterUrl + show.poster_path} alt={show.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{show.name}</p>
              <div className="subtitle is-6">First Aired: {show.first_air_date}</div>
              Rating: {show.vote_average}/10
            </div>
            <br />
            <div className="content">{show.overview.substring(0,100).concat("...")}</div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default TvCard;
  
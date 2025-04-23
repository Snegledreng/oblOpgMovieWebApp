import { Link, Routes, Route } from "react-router-dom";
import PopularMovies from "./PopularMovies";
import HighestRatedMovies from "./HighestRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import PopularTvShows from "./PopularTvShows";
import HighestRatedTvShows from "./HighestRatedTvShows";
import SearchMovie from "./SearchMovie";
import SearchedMovies from "./SearchedMovies";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/popular" className="navbar-item">
              Popular Movies
            </Link>
            <Link to="/highest-rated" className="navbar-item">
              Highest Rated Movies
            </Link>
            <Link to="/upcoming" className="navbar-item">
              Upcoming Movies
            </Link>
            <Link to="/poptv" className="navbar-item">
              Popular Shows
            </Link>
            <Link to="/highest-rated-tv" className="navbar-item">
              Highest Rated Shows
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <SearchMovie />
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/highest-rated" element={<HighestRatedMovies />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/poptv" element={<PopularTvShows />} />
        <Route path="/highest-rated-tv" element={<HighestRatedTvShows />} />
        <Route path="/searchedMovie" element={<SearchedMovies />} />
      </Routes>
    </div>
  );
}

export default Navbar;

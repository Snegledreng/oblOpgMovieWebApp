import { useFetchSearchMovieQuery } from "../store";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

function SearchedMoviesList() {
    const searchTerm = useSelector((state) => {
        return state.search.searchTerm;
    });

    const { data, error, isFetching } = useFetchSearchMovieQuery(searchTerm);

    let content;
    if (isFetching) {
        content = <div>Loading...</div>;
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else if (data && data.results.length > 0) {
        content = data.results
            .filter((movie) => movie.poster_path !== null)
            .map((movie) => {
                return <MovieCard key={movie.id} movie={movie}></MovieCard>;
            });
    } else {
        content = <div>No movies found.</div>;
    }

    return (
        <div className="fixed-grid has-6-cols">
            <div className="grid">{content}</div>
        </div>
    );
}

export default SearchedMoviesList;
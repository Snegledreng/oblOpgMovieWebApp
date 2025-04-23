import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeSearchTerm } from "../store/slices/searchSlice";

const SearchMovie = () => {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm(searchInput));
        navigate("/searchedMovie");
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for a movie..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchMovie;
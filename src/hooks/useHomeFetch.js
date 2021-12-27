import { useState, useEffect } from "react";
// API
import API from "../API";

const initialState = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0,
};

export const useHomeFetch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const fetchMovies = async (page, searchTerm = "") => {
		try {
			setError(false);
			setLoading(true);

			const movies = await API.fetchMovies(searchTerm, page);

			setState((prev) => ({
				...movies,
				results:
					page > 1
						? [...prev.results, ...movies.results]
						: [...movies.results],
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	// Initial render and search
	// This is triggered when the searchTerm is changed. This is changed in the searchbar.js file. This is because we are passing the searchTerm out into the Home.js file.
	// From here we are pointing the setSearchTerm function (which is responsible for changing the searchTerm) to the SearchBar.js file.
	// IN Searchbar.js, we are taking the enteredInput as the value of the input field
	useEffect(() => {
		setState(initialState);
		fetchMovies(1, searchTerm);
	}, [searchTerm]);

	// Load More
	// This is triggered when the isLoadingMore boolean is changed. This is changed when the button is clicked (ref home.js)
	useEffect(() => {
		if (!isLoadingMore) return;
		fetchMovies(state.page + 1, searchTerm);
		setIsLoadingMore(false);
	}, [isLoadingMore, searchTerm, state.page]);

	return {
		state,
		loading,
		error,
		setSearchTerm,
		searchTerm,
		setIsLoadingMore,
	};
};

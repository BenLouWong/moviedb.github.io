import React from "react";
import { useState, useEffect } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";
import { useHomeFetch } from "../hooks/useHomeFetch";
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import GridItem from "./Grid/GridItem";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";

export default function Home() {
	const {
		state,
		loading,
		error,
		setSearchTerm,
		searchTerm,
		setIsLoadingMore,
	} = useHomeFetch();
	// console.log(setSearchTerm, searchTerm);

	if (error) return <div>Something went wrong</div>;

	const loadHandler = () => {
		setIsLoadingMore(true);
	};

	return (
		<>
			{state.results[0] && (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			)}
			<SearchBar setSearchTerm={setSearchTerm}></SearchBar>
			<Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
				{state.results.map((movie) => (
					<GridItem
						key={movie.id}
						clickable
						title={movie.title}
						image={
							movie.poster_path
								? IMAGE_BASE_URL +
								  POSTER_SIZE +
								  movie.poster_path
								: NoImage
						}
						movieId={movie.id}
					></GridItem>
				))}
			</Grid>
			{loading && <Spinner></Spinner>}
			{state.page < state.total_pages && !loading && (
				<Button onLoad={loadHandler}></Button>
			)}
		</>
	);
}

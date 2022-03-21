import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import NoImage from "../images/no_image.jpg";
import useMovieFetch from "../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

export default function Movie() {
	const { movieId } = useParams(); //this is a hook that can be used with react router. It automatically takes the parameter in the url that we have set in the App.js file
	const { state, loading, error } = useMovieFetch(movieId);

	if (loading) return <Spinner></Spinner>;
	if (error) return <div className="">Something went wrong</div>;

	return (
		<>
			<BreadCrumb movieTitle={state.original_title}></BreadCrumb>
			<MovieInfo movie={state}></MovieInfo>
			<MovieInfoBar
				time={state.runtime}
				budget={state.budget}
				revenue={state.revenue}
			></MovieInfoBar>
			<Actor actors={state.actors}></Actor>
		</>
	);
}

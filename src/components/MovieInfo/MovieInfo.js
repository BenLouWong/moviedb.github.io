import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import GridItem from "../Grid/GridItem";
import NoImage from "../../images/no_image.jpg";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import classes from "./MovieInfo.module.css";

export default function MovieInfo(props) {
	return (
		<Wrapper backdrop={props.movie.backdrop_path}>
			<Content>
				<GridItem
					image={
						props.movie.poster_path
							? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
							: NoImage
					}
					clickable={false}
					alt="movie-thumb"
				/>
				<Text>
					<h1>{props.movie.title}</h1>
					<h3>PLOT</h3>
					<p>{props.movie.overview}</p>
					<div className={classes["rating - directors"]}>
						<div className="">
							<h3>RATING</h3>
							<div className={classes.score}>
								{props.movie.vote_average}
							</div>
						</div>
						<div className={classes.director}>
							<h3>DIRECTOR</h3> {console.log(props.movie)}
							{props.movie.directors.map((director) => (
								<p key={director.credit_id}>{director.name}</p>
							))}
						</div>
					</div>
				</Text>
			</Content>
		</Wrapper>
	);
}

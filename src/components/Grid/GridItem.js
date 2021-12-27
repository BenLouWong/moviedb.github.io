import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./GridItem.styles";

export default function GridItem(props) {
	return (
		<>
			{props.clickable ? (
				// The link component means that we will be able to click on the thumbnail
				<Link to={`/${props.movieId}`}>
					<Wrapper image={props.image} id={props.movieId}></Wrapper>
				</Link>
			) : (
				<Wrapper image={props.image} id={props.movieId}></Wrapper>
			)}
		</>
	);
}

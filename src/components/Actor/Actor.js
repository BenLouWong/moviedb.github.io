import React from "react";
import Grid from "../Grid/Grid";
import GridItem from "../Grid/GridItem";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import NoImage from "../../images/no_image.jpg";

export default function Actor(props) {
	return (
		<Grid header="Actors & Actresses">
			{/* {console.log(props.actors)} */}
			{props.actors.map((actor) => (
				<div className="">
					<GridItem
						image={
							actor.profile_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
								: NoImage
						}
					></GridItem>
					<h3>
						{actor.name} as {actor.character}
					</h3>
				</div>
			))}
		</Grid>
	);
}

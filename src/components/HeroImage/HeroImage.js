import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";
import classes from "./HeroImage.module.css";

export default function HeroImage(props) {
	return (
		<Wrapper image={props.image}>
			<Content>
				<Text>
					<h1 className={classes.heading}>{props.title}</h1>
					<p className={classes.para}>{props.text}</p>
				</Text>
			</Content>
		</Wrapper>
	);
}

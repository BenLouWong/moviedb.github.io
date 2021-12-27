import React from "react";
import classes from "./Grid.module.css";

export default function Grid(props) {
	return (
		<div className={classes.card}>
			<h1>{props.header}</h1>
			<div className={classes.grid}>{props.children}</div>
		</div>
	);
}

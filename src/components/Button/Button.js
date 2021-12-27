import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
	return (
		<button type="button" className={classes.button} onClick={props.onLoad}>
			Load More
		</button>
	);
}

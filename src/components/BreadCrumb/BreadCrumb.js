import React from "react";
import { Link } from "react-router-dom";
import classes from "./BreadCrumb.module.css";

export default function BreadCrumb(props) {
	return (
		<div className={classes.wrapper}>
			<div className={classes.content}>
				<Link to="/">
					<span>Home</span>
				</Link>
				<span>|</span>
				<span>{props.movieTitle}</span>
			</div>
		</div>
	);
}

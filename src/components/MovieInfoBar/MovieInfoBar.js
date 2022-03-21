import React from "react";
import helpers, { calcTime, convertMoney } from "../../helpers";
import classes from "./MovieInfoBar.module.css";

export default function MovieInfoBar(props) {
	return (
		<div className={classes.wrapper}>
			<div className={classes.content}>
				<div className={classes.column}>
					<p>Running Time: {calcTime(props.time)}</p>
				</div>
				<div className={classes.column}>
					<p>Budget: {convertMoney(props.budget)}</p>
				</div>
				<div className={classes.column}>
					<p>Revenue: {convertMoney(props.revenue)}</p>
				</div>
			</div>
		</div>
	);
}

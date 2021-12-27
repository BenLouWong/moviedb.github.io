import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";
// import { Wrapper, Content, LogoImg, TMDBLogoIMG } from "./Header.styles";
import classes from "./Header.module.css";

export default function Header() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.content}>
				<Link to="/">
					<img
						src={RMDBLogo}
						alt="rmdb-logo"
						className={classes.logoImg}
					></img>
				</Link>

				<img
					src={TMDBLogo}
					alt="tmdb-logo"
					className={classes.tmdbLogo}
				></img>
			</div>
		</div>
	);
}

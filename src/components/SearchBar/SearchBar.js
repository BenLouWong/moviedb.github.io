import React, { useState, useEffect, useRef } from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../../images/search-icon.svg";

export default function SearchBar(props) {
	const [enteredInput, setEnteredInput] = useState("");
	const initial = useRef(true);

	useEffect(() => {
		if (initial.current) {
			initial.current = false;
			return;
		}

		const timer = setTimeout(() => {
			props.setSearchTerm(enteredInput);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [props.setSearchTerm, enteredInput]);

	// This is taking in the input that is being typed into the search bar
	// THis should always be done for input forms
	const inputHandler = (event) => {
		setEnteredInput(event.target.value);
		console.log(enteredInput);
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.content}>
				<img src={searchIcon} alt="search-icon" />
				<input
					type="text"
					placeholder="Search Movie"
					onChange={inputHandler} //This gives us the value in the input field
					value={enteredInput}
				/>
			</div>
		</div>
	);
}

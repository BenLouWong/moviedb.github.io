import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

function App() {
	return (
		<Router>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/:movieId" element={<Movie></Movie>}></Route>
				<Route path="/*" element={<NotFound></NotFound>}></Route>
			</Routes>
			<GlobalStyle></GlobalStyle>
		</Router>
	);
}

export default App;

import React, { useState, useEffect } from "react";
//Regular Imports
import { useLocation } from "react-router-dom";
//CSS
import "./Header.css";
//Images
import bar from "../Pictures/alcohol-1961542_1920.jpg";
const Header = () => {
	const [title, set_Title] = useState("");
	const location = useLocation();

	const setTitle = () => {
		let tempTitle = "";
		if (location.pathname === "/bars-at-oswego") tempTitle = "Bars at Oswego";
		if (location.pathname === "/bars-at-oswego/the-raven")
			tempTitle = "The Raven";
		if (location.pathname === "/bars-at-oswego/the-alley-cat")
			tempTitle = "The Alley Cat";
		if (location.pathname === "/bars-at-oswego/the-bridge-street-run")
			tempTitle = "The Bridge Street Run";
		if (location.pathname === "/bars-at-oswego/the-d-bus")
			tempTitle = "The 'D' Bus";
		if (location.pathname === "/bars-at-oswego/about") tempTitle = "About";

		set_Title(tempTitle);
	};

	useEffect(() => {
		setTitle();
	});

	return (
		<div className='container-test'>
			<div className='image-container'>
				{location.pathname === "/bars-at-oswego" && (
					<img src={bar} className='bar-image' />
				)}
			</div>
			<div
				className={
					location.pathname === "/bars-at-oswego"
						? "header-container2"
						: "header-container"
				}>
				<h1>{title}</h1>
				{/* <a href='https://pngtree.com/so/summer-clipart'>
				summer clipart png from pngtree.com
			</a> */}
			</div>
		</div>
	);
};

export default Header;

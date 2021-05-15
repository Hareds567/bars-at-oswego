import React, { useState, useEffect } from "react";
//Regular Imports
import { useLocation } from "react-router-dom";
//CSS
import "./Header.css";
//Images

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
		<div className='header-container'>
			<h1>{title}</h1>
			{/* <a href='https://pngtree.com/so/summer-clipart'>
				summer clipart png from pngtree.com
			</a> */}
		</div>
	);
};

export default Header;

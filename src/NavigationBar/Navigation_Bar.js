import React from "react";
//Local Imports
import { useLocation, Link, useHistory } from "react-router-dom";
//CSS
import "./Navigation.css";
//Images
import beer from "../Pictures/beer.png";

const NavigationBar = () => {
	const location = useLocation();
	const history = useHistory();

	const isActive = (pathname) => {
		if (location.pathname === pathname) {
			return true;
		}
		return false;
	};
	const goHomePage = () => {
		history.push("/bars-at-oswego");
	};

	return (
		<div className='navigation-container'>
			<img src={beer} alt='beer' className='beer' onClick={goHomePage} />
			<div className='bar-Info'>
				<h2> Bars</h2>
				<ul className='nav'>
					<li>
						<Link
							to={(location) => ({
								...location,
								pathname: "/bars-at-oswego/the-raven",
							})}
							className={isActive("/bars-at-oswego/the-raven") && "is-active"}>
							The Raven
						</Link>
					</li>
					<li>
						<Link
							to={(location) => ({
								...location,
								pathname: "/bars-at-oswego/the-alley-cat",
							})}
							className={
								isActive("/bars-at-oswego/the-alley-cat") && "is-active"
							}>
							The Alley Cat
						</Link>
					</li>
				</ul>
			</div>
			<div className='events'>
				<h2> Events</h2>
				<ul className='nav'>
					<li>
						<Link
							to={(location) => ({
								...location,
								pathname: "/bars-at-oswego/the-bridge-street-run",
							})}
							className={
								isActive("/bars-at-oswego/the-bridge-street-run") && "is-active"
							}>
							The Bridge Street Run
						</Link>
					</li>
					<li>
						<Link
							to={(location) => ({
								...location,
								pathname: "/bars-at-oswego/the-d-bus",
							})}
							className={isActive("/bars-at-oswego/the-d-bus") && "is-active"}>
							The "D" Bus
						</Link>
					</li>
				</ul>
			</div>
			<footer className='about'>
				<Link
					to={(location) => ({
						...location,
						pathname: "/bars-at-oswego/about",
					})}>
					<h3>About</h3>
				</Link>
			</footer>
		</div>
	);
};

export default NavigationBar;

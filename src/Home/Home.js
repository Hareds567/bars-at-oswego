import React from "react";
//CSS
import "./Home.css";
//images
import bar from "../Pictures/alcohol-1961542_1920.jpg";
const Home = () => {
	return (
		<div>
			<div className='home-container'>
				<section className='top'>
					{/* <img src={bar} className='bar-image' /> */}
					<article>
						Bars are an important part of the culture of Oswego. Even so that
						there are many traditions surrounding them. The downtown of the city
						provides students and residents with a variety of choices.
					</article>
				</section>
			</div>
			<div className='iframe-container'>
				<iframe
					src='https://www.google.com/maps/d/u/0/embed?mid=1srfW8trJVZUZ-cO-EST1ShFnb7ee1Ymm'
					width='100%'
					height='480'></iframe>
			</div>
		</div>
	);
};

export default Home;

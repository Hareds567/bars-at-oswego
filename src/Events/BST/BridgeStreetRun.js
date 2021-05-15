import React, { useState, useEffect } from "react";
//CSS
import "./BridgeStreetRun.css";
//Images
import bars from "../../Pictures/BST/bars.JPG";
import route from "../../Pictures/BST/route.JPG";
const BridgeStreetRun = () => {
	const [index, setIndex] = useState(0);
	const plusSlides = (n, e) => {
		e.preventDefault();
		setIndex(index + Number.parseInt(n));
	};

	const showSlides = () => {
		const slides = document.getElementsByClassName("mySlides");
		if (index > slides.length - 1) setIndex(0);
		if (index < 0) setIndex(slides.length - 1);
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		try {
			slides[index].style.display = "block";
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		showSlides();
	}, [index]);
	return (
		<div className='bsr-container'>
			<section className='main-content'>
				<header>
					<h2>What it is?</h2>
				</header>
				<article>
					Since the 1960s the Bridge Street Run is an annual event held the last
					week before final exams in Oswego, New York. Starting at 3:00 pm
					College students at SUNY Oswego dress in white t-shirts and are armed
					with sharpie markers as they visit each of the many bars on Bridge
					Street. The goal of the marathon is to have a beer and sign shirts of
					other students before moving to the next bar. Legends say, that only a
					few were able to complete the run without passing out.
				</article>
			</section>
			<section className='images'>
				<header>
					<h2>The Route</h2>
				</header>
				{/* Slide Show */}
				<div class='slideshow-container'>
					<div class='mySlides fade'>
						<img src={bars} alt='bars' />
					</div>
					<div class='mySlides fade'>
						<img src={route} alt='route' />
					</div>
					<div class='mySlides fade'>
						<iframe
							src='https://www.google.com/maps/d/u/0/embed?mid=1uXc6GuprPTNRY_vApg-I-iY5ENEg3T_6'
							width='640'
							height='480'></iframe>
					</div>
					<a class='prev' onClick={(e) => plusSlides(-1, e)}>
						&#10094;
					</a>
					<a class='next' onClick={(e) => plusSlides(1, e)}>
						&#10095;
					</a>
				</div>
				<article>
					The first bar encounter occurs at Cheap Seats Sports bars. But most of
					the activity does not occur until students walk about 0.6 miles until
					they arrive at The Raven. Downtown Oswego provides students with the
					great opportunity to not remember the whole Friday of BST. Popular
					bars like The Ferris Wheel, The Alley Cat, and The Raven are the
					perfect places to forget everything about school.
				</article>
			</section>
			<section className='Economy'>
				<header>
					<h2>Economy of the Bars</h2>
				</header>
				<article>
					A vast number of business owners tend to enjoy the movement of people.
					Bridge Street Run draws in business from students and people who
					travel to participate in the event. Throughout the day the streets are
					flooded with people who purchase items from local businesses, drink at
					the different bars, eat at the restaurants, and stay in hotel rooms.
					Some people stay in town, waiting for the graduation ceremonies.
				</article>
			</section>
			<section className='unfortunate-events'>
				<header>
					<h2>Unfortunate Events</h2>
				</header>
				<article>
					On May 13, 2014, the police at Oswego County reported 27 drug o
					alcohol-related arrests throughout the weekend. However, the standout
					of the event was three students from SUNY Oswego who were found with
					an overdose on heroin. One died after being found on campus, and two
					were hospitalized. Due to the event, the{" "}
					<a href='http://bridgestreetrun.com/'>official site</a> for the event
					was taken down and the city started a vote to ban future series of the
					event.
				</article>
			</section>
			<section className='Students'>
				<header>
					<h2>Some Student Experiences</h2>
				</header>
				<div className='yt-videos'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/Fmwc5LYSCaU'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
					<aside className='yt-details'>
						<span>
							Bridge Street Run 2017 <br />
							by Studio150 Multimedia
						</span>
					</aside>
				</div>

				<div className='yt-videos'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/xNgvC6HmLHI'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
					<aside className='yt-details'>
						<span>
							Bridge Street Run 2013 <br />
							by OswegosNews
						</span>
					</aside>
				</div>
				<div className='yt-videos'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/tXaekPGDYbo'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen></iframe>
					<aside className='yt-details'>
						<span>
							Bridge Street Run 2012 <br />
							by OswegosNews
						</span>
					</aside>
				</div>
			</section>
		</div>
	);
};

export default BridgeStreetRun;

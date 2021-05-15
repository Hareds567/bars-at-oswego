import React from "react";
//CSS
import "./Dbus.css";
//Images
import bus from "../../Pictures/DBus/Dbus2.webp";
const Dbus = () => {
	return (
		<div className='Dbus-container'>
			<img src={bus} className='bus-image' />
			<section className='information'>
				<header>
					<h2>A Family Business</h2>
				</header>
				<article>
					The "D" bus is family owned and operated shuttle service that has been
					operating since 2003. The buses, which are primarily seen on the
					Oswego State campus from Thursday to Saturday nights are intended to
					help transport students to and from parties and the bars. Their
					services also include shuttle people for weddings, wine tours, and
					other events that may involve drinking.
				</article>
			</section>
			<section className='cancel'>
				<header>
					<h2>City Common Council Restricts Bus Night Activity</h2>
				</header>
				<article>
					In the past, the D-bus have experienced some backlash due to loud
					noises coming from drunk students. In 2012 the service was ridiculed
					at the city council meeting for the loud, disoriented students being
					transported during the nights. Later in 2015, the Oswego City Council
					at the time Francis Enwright proposed to restrict large buses in the
					Frist District in order to stop the noise complaints from various
					residents of the area. Some individuals mention that even with the
					route limitations the situation would not change since drunk students
					will loudly make their presence known through the sidewalks of Oswego.
				</article>
			</section>
			<section className='student-complaints'>
				<header>
					<h2>Student Complaints</h2>
				</header>
				<article>
					Many SUNY Oswego students think that the D-bus is an overcrowded and
					noisy vehicle, filled with intoxicated individuals. In the Oswegonian
					it is described that oftentimes the driver of the vehicle will have
					people sit on the laps of other passengers and have people move back
					to fit as many people as possible. As a result, there is some concern
					about the safety of the passengers. A small bus filled with a bunch of
					drunk college students could be a hazard on the road.
				</article>
			</section>
		</div>
	);
};

export default Dbus;

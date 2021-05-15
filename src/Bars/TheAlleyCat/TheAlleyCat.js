import React from "react";
//CSS
import "./TheAlleyCat.css";
//Regular imports
import { Chrono } from "react-chrono";

const TheAlleyCat = () => {
	const items = [
		{
			cardTitle: "Jack Gilray (⭐⭐⭐⭐)",
			cardDetailedText:
				"Nice dance bar, a little dirty but not bad for college.",
			media: {
				type: "IMAGE",
				source: {
					url: "data:image/jpeg;base64,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",
				},
			},
		},
		{
			cardTitle: "Richard Beach (⭐)",
			cardDetailedText:
				"This is just for college students this place is disgusting.",
			media: {
				type: "IMAGE",
				source: {
					url: "data:image/jpeg;base64,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",
				},
			},
		},
		{
			cardTitle: "Kali Foss (⭐⭐)",
			cardDetailedText:
				"This venue is stomach-turning. I went to college for 4 years in Oswego and only ever WILLINGLY went to AlleyCat a handful of times and every single time was trash. Horrible staff, ZERO cleanliness or hygiene.",
			media: {
				type: "IMAGE",
				source: {
					url: "data:image/jpeg;base64,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",
				},
			},
		},
	];
	return (
		<div className='alley-cat-container'>
			<section>
				<article>
					This place has been identified as the best Dance Club. Founded in
					2009, the students identify the place as the go-to place to have fun
					on a Friday night. The bar offers a good mix of hip-hop, rap, and
					house music. And its location at 23 W Bridge St is close to
					restaurants like Franco’s Pizza to satiate your hunger after a long
					party night.
				</article>
			</section>
			<div className='timeline'>
				<h2>Reviews</h2>
				<Chrono
					items={items}
					mode='VERTICAL'
					slideShow
					useReadMore={true}
					theme={{
						primary: "#9e9e9e",
						secondary: "#4caf50",
						cardBgColor: "white",
						cardForeColor: "black",
					}}
				/>
			</div>
		</div>
	);
};

export default TheAlleyCat;

import React, { useEffect } from "react";
import Slider from "./Sections/Slider";
import Featured from "./Sections/Featured";
import Lifestyle from "./Sections/Lifestyle";
import Testimonials from "./Sections/Testimonials";
import { useLoaderData } from "react-router";

const Home = () => {
	const availableRoomMateAddListings = useLoaderData();

	useEffect(() => {
		document.title = "FindNest | Smart Way to Find Roommates";
	}, []);

	return (
		<>
			<Slider></Slider>
			<div className="container max-w-7xl mx-auto px-4 flex flex-col xl:gap-40 lg:gap-20 gap-15">
				<Featured availableRoomMateAddListings={availableRoomMateAddListings}></Featured>
				<Lifestyle></Lifestyle>
				<Testimonials></Testimonials>
			</div>
		</>
	);
};

export default Home;

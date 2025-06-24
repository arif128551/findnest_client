import React from "react";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import { Typewriter } from "react-simple-typewriter";

const Featured = ({ availableRoomMateAddListings }) => {
	return (
		<div className="xl:pt-30 md:pt-20 pt-12">
			<h2 className="text-center max-w-[700px] mx-auto text-2xl lg:text-5xl/snug font-bold text-primary mb-5">
				Find the one who matches your{" "}
				<span className="text-base-300">
					<Typewriter
						words={["vibe.", "lifestyle.", "schedule.", "energy.", "preference."]}
						loop={true}
						cursor
						cursorStyle="|"
						typeSpeed={190}
						deleteSpeed={70}
						delaySpeed={1500}
					/>
				</span>
			</h2>
			<p className="text-center max-w-[641px] mx-auto text-base-content mb-10">
				Explore some of our top roommate listings! These posts are hand-picked based on availability and popularity.
				Click “See More” to view full details and connect with your potential roommate.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-7">
				{availableRoomMateAddListings.map((listing) => (
					<FeaturedCard key={listing._id} listing={listing}></FeaturedCard>
				))}
			</div>
		</div>
	);
};

export default Featured;

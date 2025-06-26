import React, { useEffect } from "react";
import BrowseListingCard from "./BrowseListingCard";
import { useLoaderData } from "react-router";

const BrowseListing = () => {
	const browseListings = useLoaderData();

	useEffect(() => {
		document.title = "Browse Roommates | FindNest";
	}, []);

	return (
		<div className="container max-w-7xl mx-auto px-4">
			<div className="pt-12 xl:pt-20 pb-5 lg:max-w-10/12 mx-auto">
				<h2 className="text-center text-2xl lg:text-4xl/snug font-bold text-primary mb-5">Explore Roommate Listings</h2>
				<p className="text-center text-base-content mb-5 xl:mb-10">
					Discover all roommate posts shared by users. The listings are displayed in a table format, fetched directly
					from the database. Click the “Eye” button on any row to view full details of a listing.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-7">
				{browseListings.map((listing) => (
					<BrowseListingCard key={listing._id} listing={listing}></BrowseListingCard>
				))}
			</div>
		</div>
	);
};

export default BrowseListing;

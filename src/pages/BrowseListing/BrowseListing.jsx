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
			<div className="overflow-x-auto bg-base-200/20 rounded-md">
				<table className="table text-primary">
					<thead className="text-primary">
						<tr>
							<th>No. </th>
							<th>Title</th>
							<th className="hidden sm:table-cell">Rent</th>
							<th className="hidden md:table-cell">Room Type</th>
							<th className="hidden lg:table-cell">Availability</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{browseListings.map((listing, index) => (
							<BrowseListingCard key={listing._id} index={index} listing={listing} />
						))}
					</tbody>
					<tfoot>
						<tr className="text-primary">
							<th>No. </th>
							<th>Title</th>
							<th className="hidden sm:table-cell">Rent</th>
							<th className="hidden md:table-cell">Room Type</th>
							<th className="hidden lg:table-cell">Availability</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

export default BrowseListing;

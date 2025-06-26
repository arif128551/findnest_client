import React from "react";
import { FaEye, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const BrowseListingCard = ({ listing, index }) => {
	const { _id, title, location, rentAmount, roomType, availability, photoURL, description } = listing;
	return (
		<div
			className="bg-base-100 rounded-3xl p-6 flex flex-col lg:flex-row gap-6 items-start border border-base-300/40"
			style={{
				transition: "box-shadow 0.3s ease",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.boxShadow = "16px 24px 36px 12px rgba(0, 0, 0, 0.04)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.boxShadow = "none";
			}}
		>
			<div className="relative lg:w-[189px] lg:h-[189px]  rounded-2xl overflow-hidden flex-shrink-0">
				<img src={photoURL} alt={title} className="w-full h-full object-cover" />

				<div className="flex gap-1.5 mb-4 flex-wrap absolute top-2.5 left-2.5">
					<span className="bg-pink-100 text-primary font-medium px-3 py-1 rounded-full text-[10px]">
						{availability}
					</span>
					<span className="bg-yellow-100 text-primary font-medium px-3 py-1 rounded-full text-[10px]">
						{roomType.includes(" ") ? roomType.split(" ")[0] : roomType}
					</span>
				</div>
			</div>

			<div className="flex-1">
				<h3 className="text-lg/snug font-semibold text-primary/80 mb-3">{title}</h3>
				<p className="flex items-center gap-2 text-primary mb-4 text-sm">
					<FaMapMarkerAlt />
					{location}
				</p>
				<p className="text-primary leading-relaxed mb-4 text-sm">{description}</p>

				<div className="flex items-center justify-between flex-wrap gap-4">
					<Link
						to={`/listing/${_id}`}
						className="transition bg-primary/80 hover:bg-primary text-white font-semibold text-[10px] px-5 py-2 rounded-full cursor-pointer"
					>
						See More
					</Link>
					<p className="text-primary text-[10px] font-semibold">
						<span className="text-lg font-bold">${rentAmount}</span> <span className="font-normal">/month</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default BrowseListingCard;

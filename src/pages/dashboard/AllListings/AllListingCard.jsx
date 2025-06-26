import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const AllListingCard = ({ listing, index }) => {
	const { _id, title, location, rentAmount, roomType, availability, photoURL } = listing;
	return (
		<tr>
			<td>{index + 1}</td>
			<td>
				<div className="flex items-center gap-3">
					<div className="avatar hidden sm:block">
						<div className="mask mask-squircle h-12 w-12">
							<img src={photoURL} alt={title} />
						</div>
					</div>
					<div>
						<div className="font-bold">{title}</div>
						<div className="text-sm opacity-50">{location}</div>
					</div>
				</div>
			</td>
			<td className="hidden sm:table-cell">${rentAmount}/m</td>
			<td className="hidden md:table-cell">{roomType}</td>
			<td className="hidden lg:table-cell">{availability}</td>
			<td>
				<div className="flex">
					<Link
						to={`/listing/${_id}`}
						className="py-2 px-2 text-lg rounded-sm text-white font-medium transition cursor-pointer bg-base-300/70 hover:bg-base-300"
						target="_blank"
					>
						<FaEye size={20} />
					</Link>
				</div>
			</td>
		</tr>
	);
};

export default AllListingCard;

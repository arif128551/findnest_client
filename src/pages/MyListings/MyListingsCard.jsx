import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
const MyListingsCard = ({ myListingItem, index, handleDelete, handleUpdateClick }) => {
	const { _id, title, location, rentAmount, roomType, availability, photoURL } = myListingItem;
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
						<div className="font-bold mb-1">{title}</div>
						<div className="sm:text-sm opacity-50 text-xs">{location}</div>
					</div>
				</div>
			</td>
			<td className="hidden lg:table-cell">${rentAmount}</td>
			<td className="hidden xl:table-cell">{roomType}</td>
			<td className="hidden xl:table-cell">{availability}</td>
			<td>
				<div className="flex gap-3 flex-wrap">
					<Link
						to={`/listing/${_id}`}
						className="py-3 px-3 text-lg rounded-sm text-white font-medium transition cursor-pointer bg-primary/80 hover:bg-primary"
					>
						<FaEye />
					</Link>
					<button
						onClick={() => handleUpdateClick(myListingItem)}
						className="transition bg-base-300/80 text-white font-semibold text-lg px-3 py-3  rounded-sm cursor-pointer hover:bg-base-300"
					>
						<FaEdit />
					</button>
					<button
						onClick={() => handleDelete(_id)}
						className="transition bg-error/80 text-white font-semibold text-md px-3 py-3  rounded-sm cursor-pointer hover:bg-error"
					>
						<FaTrashAlt />
					</button>
				</div>
			</td>
		</tr>
	);
};

export default MyListingsCard;

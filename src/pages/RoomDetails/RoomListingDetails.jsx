import React, { use, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import { PiSparkleBold } from "react-icons/pi";
import { BsCheckCircle } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/auth/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const RoomListingDetails = () => {
	const { user } = use(AuthContext);
	const initialListing = useLoaderData();
	const [listingItem, setListingItem] = useState(initialListing);
	const [hasLiked, setHasLiked] = useState(() => {
		return (initialListing.likedUsers || []).includes(user?.email);
	});
	const {
		_id,
		title,
		location,
		rentAmount,
		roomType,
		availability,
		email,
		name,
		photoURL,
		lifestylePreferences,
		description,
	} = listingItem;

	const handleLike = async () => {
		if (user?.email === listingItem.email) {
			toast.error("You can't like your own listing.");
			return;
		}

		try {
			const token = await user.getIdToken();

			const res = await axios.patch(`${import.meta.env.VITE_apiUrl}/roommates/${_id}/like`, null, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			const data = res.data;

			if (data.success) {
				setListingItem((prev) => ({
					...prev,
					likeCount: (prev.likeCount || 0) + 1,
					likedUsers: [...(prev.likedUsers || []), user.email],
				}));
				setHasLiked(true);
				toast.success("Thanks for showing interest! ❤️");
			} else {
				toast.error(data.message || "Failed to like listing");
			}
		} catch {
			toast.error("Something went wrong. Please try again.");
		}
	};

	useEffect(() => {
		document.title = "Room Details | FindNest";
	}, []);

	return (
		<main className="mx-auto max-w-4xl px-4">
			<section className="bg-base-200 md:p-17 sm:p-10 p-6 rounded-[20px] xl:mt-24 sm:mt-15 mt-10 mb-8">
				<div className="relative">
					<img src={photoURL} alt={title} className="rounded-xl w-full" />
					<div className="sm:absolute mt-4 sm:mt-0 top-4 left-4 px-5 py-2 rounded-full flex items-center gap-2 text-sm text-white bg-primary/50">
						<FaHeart className="text-red-500" />
						<span>{listingItem.likeCount ? listingItem.likeCount : 0} People Interested In</span>
					</div>
				</div>

				<div className="text-center mt-10">
					<h3 className="text-2xl font-semibold text-primary">{title}</h3>
					<p className="mt-7 text-base-content text-sm/normal max-w-xl mx-auto">{description}</p>

					<div className="flex flex-wrap justify-center gap-3 mt-6">
						<span className="px-4 py-1 rounded-full text-sm bg-pink-100 text-black">{availability}</span>
						<span className="px-4 py-1 rounded-full text-sm bg-yellow-100 text-black">{roomType}</span>
					</div>
				</div>
			</section>
			<section className="grid gap-0 xl:mb-20 sm:mb-12 mb-8">
				<div className="flex sm:items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-base-200/30 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary mx-auto sm:mx-0">
						<FiMapPin size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">Location:</h4>
					</div>
					<p className="text-center sm:text-right">{location}</p>
				</div>

				<div className="flex items-center justify-between border-0 rounded-lg px-1 sm:px-10 py-5 bg-base-200/0 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary">
						<IoLogoUsd size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">Rent Amount:</h4>
					</div>
					<p className="text-center sm:text-right">${rentAmount} /month</p>
				</div>

				<div className="flex items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-base-200/30 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary">
						<FaHome size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">Room Type:</h4>
					</div>
					<p className="text-center sm:text-right">{roomType}</p>
				</div>

				<div className="flex items-center justify-between border-0 rounded-lg px-1 sm:px-10 py-5 bg-base-200/0 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary">
						<PiSparkleBold size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">Lifestyle Preferences:</h4>
					</div>
					<p className="text-center sm:text-right">
						{lifestylePreferences.map((item, index) => (
							<span key={index}>
								{item}
								{index < lifestylePreferences.length - 1 && ", "}
							</span>
						))}
					</p>
				</div>

				<div className="flex items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-base-200/30 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary">
						<BsCheckCircle size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">Availability:</h4>
					</div>
					<p className="text-center sm:text-right">{availability}</p>
				</div>

				<div className="flex items-center justify-between border-0 rounded-lg px-1 sm:px-10 py-5 bg-base-200/0 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary">
						<FiUser size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">User Name:</h4>
					</div>
					<p>{name}</p>
				</div>

				<div className="flex items-center justify-between border rounded-lg px-1 sm:px-10 py-5 bg-base-200/30 border-base-200/90 text-lg flex-wrap flex-col sm:flex-row gap-4">
					<div className="flex items-center gap-4 text-primary">
						<FiMail size={24} className="hidden sm:block" />
						<h4 className="font-semibold text-primary">User Email:</h4>
					</div>
					<p>{email}</p>
				</div>
			</section>
			<section className="space-y-6">
				<div className="flex justify-center">
					<button
						onClick={handleLike}
						disabled={user?.email === listingItem.email}
						className={`flex items-center gap-4 ${
							user?.email === listingItem.email
								? "bg-gray-300 cursor-not-allowed"
								: "bg-primary cursor-pointer text-white"
						} font-medium py-2 px-6 rounded-full`}
					>
						<FaHeart className="text-red-500" />
						Add to Favorites
					</button>
				</div>

				<div className="flex items-center justify-between border rounded-xl p-6 bg-base-200/30 border-base-200/90 flex-col sm:flex-row gap-5">
					<div className="flex items-center gap-3">
						<div className="bg-base-200 p-3 rounded-lg">
							<FaPhoneAlt className="text-blue-500" />
						</div>
						<h4 className="font-semibold text-xl text-primary">Contact Info:</h4>
					</div>
					<p className="text-primary text-xl font-semibold">
						{hasLiked ? listingItem.contactInfo : `${listingItem.contactInfo?.slice(0, 6)}****`}
					</p>
				</div>
			</section>
		</main>
	);
};

export default RoomListingDetails;

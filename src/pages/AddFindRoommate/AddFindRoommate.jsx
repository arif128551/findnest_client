import React, { use, useEffect } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const lifestylePreferencesItems = [
	"Pet Friendly",
	"No Smoking",
	"Smoking Allowed",
	"Night Owl",
	"Early Riser",
	"Vegetarian",
	"Non-Vegetarian",
	"Alcohol Friendly",
	"Quiet Environment",
	"Cleanliness Focused",
	"Visitors Allowed",
];
const roomTypes = [
	"Single Room",
	"Shared Room",
	"Private Room",
	"Studio Apartment",
	"1BHK",
	"2BHK",
	"Dormitory",
	"Sublet",
];
const AddFindRoommate = () => {
	const { user } = use(AuthContext);
	const handleAddFindRoommate = (e) => {
		e.preventDefault();
		const form = e.target;

		const title = form.title.value.trim();
		const location = form.location.value.trim();
		const rent = form.rentAmount.value.trim();
		const contact = form.contactInfo.value.trim();
		const description = form.description.value.trim();
		const photoURL = form.photoURL.value.trim();

		if (!title || !location || !rent || !contact || !description || !photoURL) {
			toast.error("Please fill out all required fields.");
			return;
		}
		const formData = new FormData(form);
		const selectedPreferences = formData.getAll("lifestylePreferences");
		if (selectedPreferences.length === 0) {
			toast.error("Please select at least one lifestyle preference.");
			return;
		}

		const formEntries = Object.fromEntries(formData.entries());

		formEntries.lifestylePreferences = selectedPreferences;

		axios
			.post(`${import.meta.env.VITE_apiUrl}/roommates`, formEntries, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				if (res.data.insertedId) {
					toast.success("Your roommate listing has been added successfully!");
					form.reset();
				} else {
					toast.error("An error occurred. Please try again.");
				}
			})
			.catch((err) => {
				toast.error("Something went wrong.");
				console.error(err);
			});
	};

	useEffect(() => {
		document.title = "Add Find Roommate | FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Add New Find Roommate Listing</h2>
				<p className="mb-8 text-base-content">
					Fill out the form below to add your roommate listing. Provide all necessary details like title, location,
					rent, and lifestyle preferences. Your name and email are pre-filled for security reasons. Once submitted, the
					listing will be saved to the database and you'll receive a confirmation message.
				</p>
			</div>
			<form onSubmit={handleAddFindRoommate} className="bg-base-200/30 p-8 lg:p-14 rounded-lg">
				<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Title</label>
						<input
							type="text"
							name="title"
							className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
							placeholder="Enter title"
						/>
					</div>
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Location</label>
						<input
							type="text"
							name="location"
							className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
							placeholder="Enter location"
						/>
					</div>
				</div>
				<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Rent Amount</label>
						<input
							type="text"
							name="rentAmount"
							className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
							placeholder="Enter rent amount"
						/>
					</div>
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Room Type</label>
						<select
							name="roomType"
							className="select w-full h-12 text-primary border border-base-300/70 mb-6"
							defaultValue=""
							required
						>
							<option value="" disabled>
								Select room type
							</option>
							{roomTypes.map((type, index) => (
								<option key={index} value={type}>
									{type}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Availability</label>
						<select
							name="availability"
							className="select w-full px-4 text-primary border border-base-300/70 h-12 mb-6"
							defaultValue=""
							required
						>
							<option value="" disabled>
								Select availability
							</option>
							<option value="Available">Available</option>
							<option value="Not Available">Not Available</option>
						</select>
					</div>
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Contact Info</label>
						<input
							type="text"
							name="contactInfo"
							className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
							placeholder="Enter contact info"
						/>
					</div>
				</div>
				<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Name</label>
						<input
							type="text"
							name="name"
							value={user.displayName}
							readOnly
							className="input w-full px-4 py-6 text-primary/40 bg-base-200/20 border border-base-300/70 mb-6"
							required
						/>
					</div>
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Email</label>
						<input
							type="email"
							name="email"
							value={user.email}
							readOnly
							className="input w-full px-4 py-6 border border-base-300/70 mb-6 text-primary/40 bg-base-200/20"
							required
						/>
					</div>
				</div>
				<div>
					<label className="text-lg/snug font-bold text-primary mb-2 block">Photo Link</label>
					<input
						type="text"
						name="photoURL"
						className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
						placeholder="Enter Photo link"
					/>
				</div>
				<div className="mb-2">
					<label className="text-lg/snug font-bold text-primary mb-3 block">Lifestyle Preferences</label>
					{lifestylePreferencesItems.map((option, idx) => (
						<label key={idx} className="label cursor-pointer justify-start gap-1.5 mr-5 mb-4 items-center">
							<input
								type="checkbox"
								name="lifestylePreferences"
								value={option}
								className="checkbox checkbox-sm checkbox-primary"
							/>
							<span className="label-text text-primary/60">{option}</span>
						</label>
					))}
				</div>
				<label className="text-lg/snug font-bold text-primary mb-2 block">Description</label>
				<textarea
					name="description"
					className="input w-full p-4 text-primary border border-base-300/70 mb-4 h-24"
					placeholder="Enter description"
				></textarea>
				<button
					type="submit"
					className="mt-4 py-3 px-4.5 text-xl rounded-md font-bold text-white transition cursor-pointer bg-base-300/80 hover:bg-base-300"
				>
					Add Find Roommate
				</button>
			</form>
		</div>
	);
};

export default AddFindRoommate;

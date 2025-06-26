import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import MyListingsCard from "./MyListingsCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import PageLoader from "../../components/ui/PageLoader";
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

const MyListings = () => {
	const { user } = use(AuthContext);
	const [loading, setLoading] = useState(true);
	const [myListing, setMyListings] = useState([]);

	const [updateItem, setUpdateItem] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [availability, setAvailability] = useState("");
	const [lifestylePreferences, setLifestylePreferences] = useState([]);

	useEffect(() => {
		const fetchMyListings = async () => {
			setLoading(true);

			try {
				const token = await user.getIdToken();
				const res = await axios.get(`${import.meta.env.VITE_apiUrl}/my-roommates`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				const data = res.data;
				setMyListings(data);
			} catch (err) {
				toast.error("Fetch failed:", err);
			} finally {
				setLoading(false);
			}
		};

		if (user) {
			fetchMyListings();
		}
	}, [user]);

	const handleDelete = async (id) => {
		const token = await user.getIdToken();

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				const remainingMyListings = myListing.filter((listing) => listing._id !== id);
				setMyListings(remainingMyListings);

				axios
					.delete(`${import.meta.env.VITE_apiUrl}/my-roommates/${id}`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					})
					.then((res) => {
						if (res.data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Listing deleted successfully",
								icon: "success",
							});
						} else {
							Swal.fire({
								title: "Deleted!",
								text: "Failed to delete listing",
								icon: "error",
							});
						}
					})
					.catch((error) => {
						console.error(error);
						Swal.fire({
							title: "Error!",
							text: "Something went wrong",
							icon: "error",
						});
					});
			}
		});
	};

	const handleUpdateClick = (item) => {
		setUpdateItem(item);
		setAvailability(item.availability);
		setLifestylePreferences(item.lifestylePreferences || []);
		setIsModalOpen(true);
	};

	const handleUpdateListing = async (e) => {
		e.preventDefault();

		const form = e.target;

		const title = form.title.value.trim();
		const location = form.location.value.trim();
		const rentAmount = form.rentAmount.value.trim();
		const contactInfo = form.contactInfo.value.trim();
		const photoURL = form.photoURL.value.trim();
		const description = form.description.value.trim();
		const roomType = form.roomType.value;

		if (!title || !location || !rentAmount || !contactInfo || !description || !roomType || !photoURL) {
			toast.error("Please fill out all required fields.");
			return;
		}

		if (lifestylePreferences.length === 0) {
			toast.error("Please select at least one lifestyle preference.");
			return;
		}

		const updatedData = {
			title,
			location,
			rentAmount,
			roomType,
			availability,
			contactInfo,
			photoURL,
			description,
			name: updateItem.name,
			email: updateItem.email,
			lifestylePreferences,
		};

		try {
			const token = await user.getIdToken();

			const response = await axios.put(`${import.meta.env.VITE_apiUrl}/my-roommates/${updateItem._id}`, updatedData, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			const result = response.data;

			if (result.modifiedCount > 0) {
				toast.success("Listing updated successfully.");
				const updatedListings = myListing.map((item) =>
					item._id === updateItem._id ? { ...item, ...updatedData } : item
				);
				setMyListings(updatedListings);
				setIsModalOpen(false);
				setUpdateItem(null);
			} else {
				toast.error("No changes made.");
			}
		} catch (error) {
			toast.error("Failed to update listing.", error);
		}
	};

	useEffect(() => {
		document.title = "My Listings | FindNest";
	}, []);

	if (loading) {
		return <PageLoader />;
	}

	return (
		<div className="container max-w-7xl mx-auto px-4">
			<div className="pt-12 xl:pt-20 pb-5 max-w-[641px] mx-auto">
				<h2 className="text-center text-2xl lg:text-4xl/snug font-bold text-primary mb-5">My Roommate Listings</h2>
				<p className="text-center text-base-content mb-5 xl:mb-10">
					This is your personal dashboard to view all the roommate listings you've added. The data shown here is private
					and only accessible to you. Each listing appears in a table format for easy review and management.
				</p>
			</div>
			<div className="overflow-x-auto bg-base-200/20 rounded-md">
				<table className="table text-primary">
					<thead className="text-primary">
						<tr>
							<th>No. </th>
							<th>Title</th>
							<th className="hidden lg:table-cell">Rent</th>
							<th className="hidden xl:table-cell">Room Type</th>
							<th className="hidden xl:table-cell">Availability</th>

							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{myListing.length === 0 ? (
							<tr>
								<td colSpan="6" className="text-center py-6 text-primary">
									You haven't added any roommate listings yet.
								</td>
							</tr>
						) : (
							myListing.map((myListingItem, index) => (
								<MyListingsCard
									key={myListingItem._id}
									myListingItem={myListingItem}
									index={index}
									handleDelete={handleDelete}
									handleUpdateClick={handleUpdateClick}
								/>
							))
						)}
					</tbody>
					<tfoot>
						<tr className="text-primary">
							<th>No. </th>
							<th>Title</th>
							<th className="hidden lg:table-cell">Rent</th>
							<th className="hidden xl:table-cell">Room Type</th>
							<th className="hidden xl:table-cell">Availability</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>

			{isModalOpen && updateItem && (
				<dialog open id="update-roommate-modal" className="modal">
					<div className="modal-box w-11/12 max-w-5xl">
						<div className="text-center pt-4 lg:max-w-10/12 mx-auto">
							<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Update Roommate Listing</h2>
							<p className="mb-8 text-base-content">
								Modify your existing roommate listing using the form below. You can update the rent, location,
								preferences, and other details. Your email and name are shown as read-only for security purposes.
							</p>
						</div>
						<form onSubmit={handleUpdateListing} className="lg:px-10">
							<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
								<div className="sm:w-1/2">
									<label className="text-lg/snug font-bold text-primary mb-2 block">Title</label>
									<input
										type="text"
										name="title"
										className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
										placeholder="Enter title"
										defaultValue={updateItem.title}
									/>
								</div>
								<div className="sm:w-1/2">
									<label className="text-lg/snug font-bold text-primary mb-2 block">Location</label>
									<input
										type="text"
										name="location"
										className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
										placeholder="Enter location"
										defaultValue={updateItem.location}
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
										defaultValue={updateItem.rentAmount}
									/>
								</div>
								<div className="sm:w-1/2">
									<label className="text-lg/snug font-bold text-primary mb-2 block">Room Type</label>
									<select
										name="roomType"
										className="select select-bordered text-primary w-full h-12 border border-base-300/70 mb-6"
										defaultValue={updateItem.roomType}
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
										value={availability}
										className="select w-full px-4 text-primary border border-base-300/70 h-12 mb-6"
										onChange={(e) => setAvailability(e.target.value)}
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
										defaultValue={updateItem.contactInfo}
									/>
								</div>
							</div>
							<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
								<div className="sm:w-1/2">
									<label className="text-lg/snug font-bold text-primary mb-2 block">Name</label>
									<input
										type="text"
										name="name"
										defaultValue={updateItem.name}
										readOnly
										className="input w-full px-4 py-6 text-primary/40 bg-base-200/20 border border-base-300/70 mb-6"
									/>
								</div>
								<div className="sm:w-1/2">
									<label className="text-lg/snug font-bold text-primary mb-2 block">Email</label>
									<input
										type="email"
										name="email"
										defaultValue={updateItem.email}
										readOnly
										className="input w-full px-4 py-6 border border-base-300/70 mb-6 text-primary/40 bg-base-200/20"
									/>
								</div>
							</div>
							<div>
								<label className="text-lg/snug font-bold text-primary mb-2 block">Photo Link</label>
								<input
									type="text"
									name="photoURL"
									defaultValue={updateItem.photoURL}
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
											checked={lifestylePreferences.includes(option)}
											onChange={(e) => {
												const { value, checked } = e.target;
												if (checked) {
													setLifestylePreferences([...lifestylePreferences, value]);
												} else {
													setLifestylePreferences(lifestylePreferences.filter((item) => item !== value));
												}
											}}
											className="checkbox checkbox-sm checkbox-primary"
										/>
										<span className="label-text text-primary/60">{option}</span>
									</label>
								))}
							</div>
							<label className="text-lg/snug font-bold text-primary mb-2 block">Description</label>
							<textarea
								name="description"
								className="textarea w-full p-4 text-primary border border-base-300/70 mb-4 h-24"
								placeholder="Enter description"
								defaultValue={updateItem.description}
							></textarea>
							<div className="flex justify-between flex-wrap mt-4 gap-4">
								<button
									className="btn px-10 py-7 text-base-100 text-xl bg-primary/80 hover:bg-primary"
									onClick={() => {
										setIsModalOpen(false);
										setUpdateItem(null);
									}}
								>
									Close
								</button>
								<button
									type="submit"
									className="py-3 px-4 text-xl rounded-md text-white font-bold transition cursor-pointer bg-base-300/80 hover:bg-base-300"
								>
									Update Find Roommate
								</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
};

export default MyListings;

import React, { use, useEffect, useState } from "react";
import CountUp from "react-countup";
import { RxAvatar } from "react-icons/rx";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../../../contexts/auth/AuthContext";
import PercentageIndicator from "./PercentageIndicator";
const DashboardSummary = () => {
	const { user } = use(AuthContext);
	const [stats, setStats] = useState({
		users: 0,
		listings: 0,
		myListings: 0,
	});

	const [percentages, setPercentages] = useState({
		users: 0,
		listings: 0,
		myListings: 0,
	});

	useEffect(() => {
		const fetchStats = async () => {
			try {
				const [usersRes, listingsRes, myListingsRes] = await Promise.all([
					axios.get(`${import.meta.env.VITE_apiUrl}/stats/total-users`),
					axios.get(`${import.meta.env.VITE_apiUrl}/stats/total-listings`),
					user?.token
						? axios.get(`${import.meta.env.VITE_apiUrl}/stats/my-listings`, {
								headers: {
									Authorization: `Bearer ${user.token}`,
								},
						  })
						: Promise.resolve({ data: { total: 0 } }),
				]);

				setStats({
					users: usersRes.data.total,
					listings: listingsRes.data.total,
					myListings: myListingsRes.data.total,
				});
			} catch (error) {
				console.error("Stats fetch error:", error);
			}
		};

		const fetchPercentages = async () => {
			try {
				const [usersP, listingsP, myListingsP] = await Promise.all([
					axios.get(`${import.meta.env.VITE_apiUrl}/stats/user-change`),
					axios.get(`${import.meta.env.VITE_apiUrl}/stats/percentage/listings`),
					user?.token
						? axios.get(`${import.meta.env.VITE_apiUrl}/stats/percentage/my-listings`, {
								headers: {
									Authorization: `Bearer ${user.token}`,
								},
						  })
						: Promise.resolve({ data: { percentage: 0 } }),
				]);

				setPercentages({
					users: usersP.data.percentage,
					listings: listingsP.data.percentage,
					myListings: myListingsP.data.percentage,
				});
			} catch (error) {
				console.error("Percentage fetch error:", error);
			}
		};

		if (user) {
			fetchStats();
			fetchPercentages();
		}
	}, [user]);

	return (
		<div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-6">
			<div className="bg-white px-3 py-6 sm:p-6 rounded-lg flex items-center justify-between gap-2 sm:gap-5">
				<div className="flex items-center gap-4">
					<div className="bg-c5f29cc/5 p-3 sm:p-5 rounded-full">
						<FaUsers size={30} color="#5f29cc" />
					</div>
					<div>
						<p className="text-sm sm:text-base font-semibold text-c180a33/50 mb-0.5">Users</p>
						<h3 className="sm:text-xl font-extrabold text-c180a33">
							<CountUp end={stats.users} enableScrollSpy startOnMount={false} duration={2} />+
						</h3>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 text-lg">
					<p>
						<PercentageIndicator value={percentages.users} />
					</p>
				</div>
			</div>
			<div className="bg-white px-3 py-6 sm:p-6 rounded-lg flex items-center justify-between gap-2 sm:gap-5">
				<div className="flex items-center gap-4">
					<div className="bg-c5f29cc/5 p-3 sm:p-5 rounded-full">
						<AiOutlineDollarCircle size={30} color="#5f29cc" />
					</div>
					<div>
						<p className="text-sm sm:text-base font-semibold text-c180a33/50 mb-0.5">Total Listings</p>
						<h3 className="sm:text-xl font-extrabold text-c180a33">
							<CountUp end={stats.listings} enableScrollSpy startOnMount={false} duration={2} />+
						</h3>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 text-lg">
					<p>
						<PercentageIndicator value={percentages.listings} />
					</p>
				</div>
			</div>
			<div className="bg-white px-3 py-6 sm:p-6 rounded-lg flex items-center justify-between gap-2 sm:gap-5">
				<div className="flex items-center gap-4">
					<div className="bg-c5f29cc/5 p-3 sm:p-5 rounded-full">
						<MdOutlineShoppingBag size={30} color="#5f29cc" />
					</div>
					<div>
						<p className="text-sm sm:text-base font-semibold text-c180a33/50 mb-0.5">My Added Listings</p>
						<h3 className="sm:text-xl font-extrabold text-c180a33">
							<CountUp end={stats.myListings} enableScrollSpy startOnMount={false} duration={2} />+
						</h3>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 text-lg">
					<p>
						<PercentageIndicator value={percentages.myListings} />
					</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardSummary;

import React, { use, useEffect } from "react";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import DashboardSummary from "./Sections/DashboardSummary";
import dayjs from "dayjs";
import ListingAnalytics from "./Sections/ListingAnalytics";
import AboutUser from "./Sections/AboutUser";

const Dashboard = () => {
	const { user } = use(AuthContext);
	const { displayName } = user;
	useEffect(() => {
		document.title = "Dashboard | FindNest";
	}, []);
	return (
		<div className="sm:py-10">
			<div className="">
				<div className="mb-6 flex sm:justify-between sm:items-center gap-6 flex-col sm:flex-row">
					<div>
						<p className="md:text-lg text-c2a115b/40 mb-1">Welcome Back, {displayName}</p>
						<h1 className="text-lg md:text-2xl font-semibold text-c180a33">Dashboard</h1>
					</div>

					<div className="w-36">
						<p className="text-sm text-gray-400">{dayjs().format("dddd")}</p>
						<p className="text-base font-medium text-c180a33">{dayjs().format("D MMMM, YYYY")}</p>
					</div>
				</div>
				<div className="bg-base-200/40 rounded-md p-4 sm:p-10">
					<DashboardSummary></DashboardSummary>
					<div className="grid lg:grid-cols-12 gap-6 mb-6">
						<ListingAnalytics></ListingAnalytics>
						<AboutUser></AboutUser>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

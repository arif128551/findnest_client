import React from "react";
import { NavLink } from "react-router";

const DashboardSidebar = () => {
	return (
		<aside className="w-full sm:max-w-60 bg-gray-900 min-h-screen hidden md:flex">
			<nav className="space-y-8 w-full">
				<div className="space-y-2 w-full">
					<div className="dashboard-desktop-menu flex flex-col  space-y-3 text-white/80">
						<NavLink to="/dashboard" end>
							Dashboard
						</NavLink>
						<NavLink rel="noopener noreferrer" to="/dashboard/all-listings">
							All Listings
						</NavLink>
						<NavLink rel="noopener noreferrer" to="/dashboard/add-listing">
							Add Listing
						</NavLink>
						<NavLink rel="noopener noreferrer" to="/dashboard/my-listings">
							My Listings
						</NavLink>
						<NavLink rel="noopener noreferrer" to="/">
							Visit Site
						</NavLink>
					</div>
				</div>
			</nav>
		</aside>
	);
};

export default DashboardSidebar;

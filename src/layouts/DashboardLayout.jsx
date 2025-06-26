import React from "react";
import { AuthContext } from "../contexts/auth/AuthContext";
import { Outlet } from "react-router";
import DashboardNavBar from "../pages/dashboard/Shared/DashboardNavBar";
import DashboardSidebar from "../pages/dashboard/Shared/DashboardSidebar";

const DashboardLayout = () => {
	return (
		<div>
			<DashboardNavBar></DashboardNavBar>
			<div>
				<DashboardSidebar></DashboardSidebar>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DashboardLayout;

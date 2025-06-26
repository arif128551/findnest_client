import React, { useEffect } from "react";

const Dashboard = () => {
	useEffect(() => {
		document.title = "Dashboard | FindNest";
	}, []);
	return <div>hello</div>;
};

export default Dashboard;

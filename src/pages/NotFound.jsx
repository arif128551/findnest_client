import React, { useEffect } from "react";
import { Link, useRouteError } from "react-router";
const NotFound = () => {
	const error = useRouteError();
	useEffect(() => {
		document.title = "Not Found | FindNest";
	}, []);
	return (
		<>
			<div className="py-24 text-center px-3">
				<h1 className="mb-8 text-7xl font-thin text-gray-900">{error?.status || 404}</h1>
				<p className="text-xl font-bold text-gray-900 md:text-2xl mb-8">
					{error?.error?.message || "Something Went Wrong!"}
				</p>
				<Link to="/">
					<button className="transition text-xl font-bold  px-8 py-3 border border-base-300 hover:bg-base-300 bg-base-300/80 text-white  rounded-full cursor-pointer">
						Go To Homepage
					</button>
				</Link>
			</div>
		</>
	);
};

export default NotFound;

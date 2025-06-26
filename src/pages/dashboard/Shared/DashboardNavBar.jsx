import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { PiUserCircleFill } from "react-icons/pi";
import toast from "react-hot-toast";

const DashboardNavBar = () => {
	const { user, signOutUser } = use(AuthContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		signOutUser()
			.then(() => {
				navigate("/");
				toast.success("You’re now logged out. See you again soon!");
			})
			.catch((error) => {
				toast(error);
			});
	};
	return (
		<div className="navbar bg-gray-900 shadow-sm px-4 sticky top-0 z-10">
			<div className="flex-1 navbar-start">
				<div className="dropdown md:hidden">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />{" "}
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<a>Homepage</a>
						</li>
						<li>
							<a>Portfolio</a>
						</li>
						<li>
							<a>About</a>
						</li>
					</ul>
				</div>
				<div className="navbar-start">
					<div tabIndex={0} className="text-white cursor-pointer ml-1 md:ml-0">
						<span className="hidden sm:inline-block">FindNest</span> Dashboard
					</div>
				</div>
			</div>

			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<div className="flex gap-2 items-center">
						<div className="hidden sm:flex">
							<h2 className="text-white">{user.displayName}</h2>
						</div>
						<div tabIndex={0} role="button" className="btn-circle w-10 h-10 avatar bg-white">
							<div className="rounded-full">
								{user.photoURL ? (
									<img src={user.photoURL} alt="Profile photo" className="w-10 h-10 rounded-full cursor-pointer" />
								) : (
									<PiUserCircleFill size={41} className="cursor-pointer user-full-name" />
								)}
							</div>
						</div>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<Link to="/">Visit Site</Link>
						</li>
						<li>
							<button className="cursor-pointer" onClick={handleLogout}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardNavBar;

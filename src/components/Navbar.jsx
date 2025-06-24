import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/auth/AuthContext";
import toast from "react-hot-toast";
import { PiUserCircleFill } from "react-icons/pi";
import ThemeToggle from "./ui/ThemeToggle";
import Logo from "./ui/Logo";
import { Tooltip } from "react-tooltip";
const Navbar = ({ setTheme, theme }) => {
	const { user, signOutUser } = use(AuthContext);
	const handleLogout = () => {
		signOutUser()
			.then(() => {
				toast.success("You’re now logged out. See you again soon!");
			})
			.catch((error) => {
				toast(error);
			});
	};
	return (
		<div className="bg-base-200">
			<div className="navbar container max-w-7xl mx-auto py-4 items-center flex">
				<div className="navbar-start xl:w-[40%]">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="px-3 py-4 rounded-md lg:hidden mr-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" />{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu  dropdown-content bg-base-100 text-base rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/add-find-roommate">Add Find Roommate</NavLink>
							</li>
							<li>
								<NavLink to="/browse-listing">Browse Listing</NavLink>
							</li>
							<li>
								<NavLink to="/my-listings">My Listings</NavLink>
							</li>
							{user ? (
								<div className="flex items-center gap-4">
									<button
										onClick={handleLogout}
										className="text-xs sm:text-sm transition text-white bg-primary hover:bg-primary hover:text-white font-semibold py-1.5 px-5 rounded-lg cursor-pointer max-w-40 my-2 ml-3"
									>
										Logout
									</button>
								</div>
							) : (
								<>
									<li className="block sm:hidden">
										<NavLink to="/login">Login</NavLink>
									</li>
									<li className="block sm:hidden">
										<NavLink to="/signup">Signup</NavLink>
									</li>
								</>
							)}
						</ul>
					</div>
					<Link to="/">
						<Logo theme={theme}></Logo>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu-horizontal text-base font-medium text-primary flex flex-wrap w-fit gap-10">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/add-find-roommate">Add Listing</NavLink>
						</li>
						<li>
							<NavLink to="/browse-listing">Browse Listing</NavLink>
						</li>
						<li>
							<NavLink to="/my-listings">My Listings</NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-end gap-3">
					<ThemeToggle setTheme={setTheme} theme={theme} />
					{user ? (
						<>
							<div className="mr-1 relative group  hidden sm:block">
								{user.photoURL ? (
									<img
										src={user.photoURL}
										alt="Profile photo"
										data-tooltip-id="user-tooltip"
										className="w-10 h-10 rounded-full object-cover  cursor-pointer"
									/>
								) : (
									<PiUserCircleFill
										size={41}
										className="cursor-pointer user-full-name"
										data-tooltip-id="user-tooltip"
									/>
								)}
								<Tooltip id="user-tooltip" place="bottom">
									{user.displayName}
								</Tooltip>
							</div>
							<button
								onClick={handleLogout}
								className="text-xs sm:text-sm transition text-white bg-primary hover:text-white font-semibold py-2.5 px-5 rounded-lg cursor-pointer  hidden sm:block hover:bg-base-300"
							>
								Logout
							</button>
						</>
					) : (
						<>
							<Link
								to="/login"
								className="text-xs sm:text-sm transition text-primary bg-white hover:text-white font-semibold py-2.5 px-5 rounded-lg hidden sm:block hover:bg-base-300"
							>
								Login
							</Link>
							<Link
								to="/signup"
								className="bg-primary hover:bg-base-300 transition text-xs sm:text-sm text-white font-semibold py-2.5 px-5 rounded-lg  hidden sm:block"
							>
								Signup
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

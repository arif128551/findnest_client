import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

const AboutUser = () => {
	const { user } = useContext(AuthContext);

	return (
		<div className="lg:col-span-4 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
			<div className="flex flex-col items-center text-center">
				<img
					src={user?.photoURL || "https://i.ibb.co/2kR5q9W/avatar-placeholder.png"}
					alt="Profile"
					className="w-24 h-24 rounded-full object-cover border-4 border-violet-100 shadow-sm mb-4"
				/>
				<h3 className="text-xl font-semibold text-c180a33">{user?.displayName || "Anonymous User"}</h3>
				<p className="text-sm text-gray-500 mt-1">{user?.email}</p>
			</div>

			<div className="mt-6 border-t border-gray-100 pt-4 space-y-3 text-sm text-gray-700">
				<div className="flex justify-between">
					<span className="font-medium text-gray-600">Account Created</span>
					<span>
						{user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "N/A"}
					</span>
				</div>
				<div className="flex justify-between">
					<span className="font-medium text-gray-600">Last Sign In</span>
					<span>
						{user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : "N/A"}
					</span>
				</div>
			</div>
		</div>
	);
};

export default AboutUser;

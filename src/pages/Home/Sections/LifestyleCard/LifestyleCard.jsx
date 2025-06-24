import React from "react";

const LifestyleCard = ({ icon, title, description }) => {
	return (
		<div
			className="p-6 rounded-xl border border-base-300/40"
			style={{
				transition: "box-shadow 0.3s ease",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.boxShadow = "16px 24px 36px 12px rgba(0, 0, 0, 0.04)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.boxShadow = "none";
			}}
		>
			<div className="mb-4">{icon}</div>
			<h3 className="font-semibold text-lg mb-2 text-primary">{title}</h3>
			<p className="text-base-content">{description}</p>
		</div>
	);
};

export default LifestyleCard;

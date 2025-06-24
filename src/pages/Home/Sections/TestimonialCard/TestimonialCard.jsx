import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, role, feedback }) => {
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
			<div className="flex items-center gap-4 mb-4">
				<img src={image} alt={name} className="w-12 h-12 rounded-full" />
				<div>
					<h4 className="font-bold text-primary">{name}</h4>
					<p className="text-sm">{role}</p>
				</div>
			</div>
			<p className="mb-4 text-sm leading-relaxed">{feedback}</p>
			<div className="flex gap-0.5 text-yellow-400">
				{[...Array(5)].map((_, icon) => (
					<FaStar key={icon} />
				))}
			</div>
		</div>
	);
};

export default TestimonialCard;

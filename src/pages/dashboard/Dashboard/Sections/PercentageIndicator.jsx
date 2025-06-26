import React from "react";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

const PercentageIndicator = ({ value }) => {
	const numericValue = Number(value);
	console.log(numericValue);

	const isNegative = numericValue < 0;
	const color = numericValue === 0 ? "text-gray-400" : isNegative ? "text-red-500" : "text-green-500";
	const icon = numericValue === 0 ? null : isNegative ? <IoTrendingDown size={20} /> : <IoTrendingUp size={20} />;

	return (
		<span className={`flex items-center gap-2 text-lg ${color}`}>
			{icon}
			<span>{Math.abs(numericValue)}%</span>
		</span>
	);
};

export default PercentageIndicator;

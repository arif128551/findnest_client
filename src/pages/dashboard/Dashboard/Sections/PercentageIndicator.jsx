import React from "react";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";

const PercentageIndicator = ({ value }) => {
	const isNegative = value < 0;
	const icon = isNegative ? <IoTrendingDown size={20} /> : <IoTrendingUp size={20} />;
	const color = isNegative ? "text-red-500" : "text-green-500";

	return (
		<span className={`flex items-center gap-2 text-lg ${color}`}>
			{icon}
			<span>{Math.abs(value)}%</span>
		</span>
	);
};

export default PercentageIndicator;

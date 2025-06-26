import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
	{ month: "Jan", sales: 0, revenue: 0 },
	{ month: "Feb", sales: 100, revenue: 140 },
	{ month: "Mar", sales: 40, revenue: 60 },
	{ month: "Apr", sales: 110, revenue: 180 },
	{ month: "May", sales: 70, revenue: 100 },
	{ month: "Jun", sales: 140, revenue: 220 },
	{ month: "Jul", sales: 60, revenue: 90 },
	{ month: "Aug", sales: 130, revenue: 240 },
	{ month: "Sep", sales: 90, revenue: 100 },
	{ month: "Oct", sales: 160, revenue: 280 },
	{ month: "Nov", sales: 80, revenue: 150 },
	{ month: "Dec", sales: 115, revenue: 200 },
];
const ListingAnalytics = () => {
	return (
		<div className="lg:col-span-8 bg-white p-4 sm:p-6 rounded-lg">
			<div className="flex justify-between items-center mb-7">
				<h4 className="text-sm sm:text-base">Sales Analytics</h4>
				<select className="select w-25 sm:w-30">
					<option>2025</option>
					<option>2024</option>
					<option>2023</option>
				</select>
			</div>

			<div className="w-full h-[390px]">
				<ResponsiveContainer>
					<LineChart width={800} height={400} data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="sales" stroke="#5f29cc" name="Item Sales" />
						<Line type="monotone" dataKey="revenue" stroke="#10b981" strokeDasharray="5 5" name="Revenue" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default ListingAnalytics;

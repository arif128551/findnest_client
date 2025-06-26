import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import dayjs from "dayjs";

const ListingAnalytics = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchAnalytics = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_apiUrl}/stats/monthly-listings`);
				const chartData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
					(month) => {
						const found = res.data.find((item) => item.month === month);
						return {
							month,
							count: found?.count || 0,
						};
					}
				);
				setData(chartData);
			} catch (err) {
				console.error("Failed to load listing analytics:", err);
			}
		};

		fetchAnalytics();
	}, []);

	return (
		<div className="lg:col-span-8 bg-white p-4 sm:p-6 rounded-lg">
			<div className="flex justify-between items-center mb-7">
				<h4 className="text-sm sm:text-base">Listings Analytics</h4>
				<div>{dayjs().format("YYYY")}</div>
			</div>

			<div className="w-full h-[390px]">
				<ResponsiveContainer>
					<LineChart width={800} height={400} data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="count" stroke="#5f29cc" name="Listings" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default ListingAnalytics;

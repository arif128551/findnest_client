import React from "react";
import CountUp from "react-countup";
import { RxAvatar } from "react-icons/rx";
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
const DashboardSummary = () => {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6 mb-6">
			<div className="bg-white px-3 py-6 sm:p-6 rounded-lg flex items-center justify-between gap-2 sm:gap-5">
				<div className="flex items-center gap-4">
					<div className="bg-c5f29cc/5 p-3 sm:p-5 rounded-full">
						<FaUsers size={30} color="#5f29cc" />
					</div>
					<div>
						<p className="text-sm sm:text-base font-semibold text-c180a33/50 mb-0.5">Visitor</p>
						<h3 className="sm:text-xl font-extrabold text-c180a33">
							<CountUp end={40235} enableScrollSpy startOnMount={false} duration={2} />+
						</h3>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 text-lg text-red-500">
					<IoTrendingDown size={20} />
					<p>0.5%</p>
				</div>
			</div>
			<div className="bg-white px-3 py-6 sm:p-6 rounded-lg flex items-center justify-between gap-2 sm:gap-5">
				<div className="flex items-center gap-4">
					<div className="bg-c5f29cc/5 p-3 sm:p-5 rounded-full">
						<AiOutlineDollarCircle size={30} color="#5f29cc" />
					</div>
					<div>
						<p className="text-sm sm:text-base font-semibold text-c180a33/50 mb-0.5">Revenue</p>
						<h3 className="sm:text-xl font-extrabold text-c180a33">
							<CountUp end={48575} enableScrollSpy startOnMount={false} duration={2} />+
						</h3>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 text-lg text-green-500">
					<IoTrendingUp size={20} />
					<p>2.5%</p>
				</div>
			</div>
			<div className="bg-white px-3 py-6 sm:p-6 rounded-lg flex items-center justify-between gap-2 sm:gap-5">
				<div className="flex items-center gap-4">
					<div className="bg-c5f29cc/5 p-3 sm:p-5 rounded-full">
						<MdOutlineShoppingBag size={30} color="#5f29cc" />
					</div>
					<div>
						<p className="text-sm sm:text-base font-semibold text-c180a33/50 mb-0.5">Orders</p>
						<h3 className="sm:text-xl font-extrabold text-c180a33">
							<CountUp end={8226} enableScrollSpy startOnMount={false} duration={2} />+
						</h3>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 text-lg text-green-500">
					<IoTrendingUp size={20} />
					<p>1.5%</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardSummary;

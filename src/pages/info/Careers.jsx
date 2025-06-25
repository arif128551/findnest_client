import React, { useEffect } from "react";
import { Link } from "react-router";

const Careers = () => {
	useEffect(() => {
		document.title = "Careers - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Join Our Team</h2>
				<p className="mb-8 text-base-content">
					At <span className="font-semibold">FindNest</span>, we’re on a mission to revolutionize the roommate search
					experience. If you're passionate about innovation, housing solutions, and making a real impact—this is the
					place for you!
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg text-base-content space-y-10">
				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Why Work With Us?</h3>
					<p>
						We're a fast-growing startup with a supportive culture, remote flexibility, and a shared goal of solving
						real-world problems. You'll get to work with a collaborative team that values your input and encourages
						learning.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-5 text-primary">Open Positions</h3>

					<div className="grid gap-6">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-bold text-primary mb-2">Frontend Developer (React)</h4>
							<p className="mb-2">
								<strong>Location:</strong> Remote
								<br />
								<strong>Type:</strong> Full-Time
							</p>
							<p className="mb-3">
								We’re looking for a skilled React developer to help us build smooth and responsive UI components for our
								roommate matching platform.
							</p>
							<Link to={"/contact"} className="btn btn-primary btn-sm">
								Apply Now
							</Link>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-bold text-primary mb-2">Community Support Specialist</h4>
							<p className="mb-2">
								<strong>Location:</strong> Dhaka Office / Remote
								<br />
								<strong>Type:</strong> Part-Time
							</p>
							<p className="mb-3">
								Engage with our users, help them resolve issues, and build a helpful and friendly online community.
								Great communication is key!
							</p>
							<Link to={"/contact"} className="btn btn-primary btn-sm">
								Apply Now
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Careers;

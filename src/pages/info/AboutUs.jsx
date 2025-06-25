import React, { useEffect } from "react";

const AboutUs = () => {
	useEffect(() => {
		document.title = "About Us - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">About Us</h2>
				<p className="mb-8 text-base-content">
					At <span className="font-semibold">FindNest</span>, we believe that finding the perfect roommate shouldn't be
					stressful or time-consuming. Our mission is to help people discover a safe, compatible, and comfortable place
					to live, tailored to their lifestyle and preferences.
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg space-y-8 text-base-content">
				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Our Story</h3>
					<p>
						Founded by a group of college friends who struggled with finding suitable roommates, FindNest was born out
						of the need for a better, smarter solution. What started as a simple idea has grown into a trusted platform
						helping thousands find their ideal living situation across the country.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">What We Offer</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Verified roommate and listing profiles</li>
						<li>Filters based on lifestyle, location, and budget</li>
						<li>User-friendly interface with fast search options</li>
						<li>Secure and private communication between users</li>
					</ul>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
					<p>
						We aim to empower individuals to find not just a place to live, but a place to belong. Whether you’re a
						student, young professional, or someone relocating—FindNest makes the roommate search easier and safer.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Meet the Team</h3>
					<p>
						Our passionate team of developers, designers, and community builders work hard every day to improve your
						experience and ensure that FindNest continues to serve your housing needs with trust and efficiency.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Let's Connect</h3>
					<p>
						Have feedback or suggestions? We’d love to hear from you. Reach out to us at{" "}
						<span className="font-medium">info@findnest.com</span> and help us make roommate finding better for
						everyone.
					</p>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;

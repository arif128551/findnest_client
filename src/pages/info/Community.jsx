import React, { useEffect } from "react";

const Community = () => {
	useEffect(() => {
		document.title = "Community - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Our Community</h2>
				<p className="mb-8 text-base-content">
					At <span className="font-semibold">FindNest</span>, we’re more than just a platform — we’re a growing
					community of people helping each other find safe, reliable, and compatible living arrangements.
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg text-base-content space-y-10">
				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Connect, Share, Support</h3>
					<p>
						Whether you're looking for a roommate or offering a space, FindNest encourages positive communication,
						mutual respect, and trust among its users. Our community thrives when members feel supported and heard.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">What Makes Our Community Unique?</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Verified profiles to build a trusted network</li>
						<li>Review and rating system to share experiences</li>
						<li>Safe messaging system to connect securely</li>
						<li>Helpful tips and blog posts to guide new users</li>
					</ul>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Community Guidelines</h3>
					<p>
						We ask all members to treat others with kindness, avoid discrimination, and report any suspicious behavior.
						Maintaining a safe and respectful environment is our top priority.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Get Involved</h3>
					<p>
						Have suggestions or stories to share? Reach out to our team or join upcoming community events and
						discussions. Help us grow and improve the FindNest experience for everyone.
					</p>
				</div>
			</section>
		</div>
	);
};

export default Community;

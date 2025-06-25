import React, { useEffect } from "react";

const TermsConditions = () => {
	useEffect(() => {
		document.title = "Terms & Conditions - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Terms & Conditions</h2>
				<p className="mb-8 text-base-content">
					By accessing or using the FindNest website, you agree to comply with and be bound by the following Terms and
					Conditions. Please read them carefully before using our services.
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg text-base-content space-y-10">
				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">1. Acceptance of Terms</h3>
					<p>
						By creating an account or browsing listings on FindNest, you agree to follow these terms. If you do not
						agree, please do not use the platform.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">2. User Responsibilities</h3>
					<p>
						You agree to provide accurate information, respect others on the platform, and not misuse the service for
						unlawful purposes. Any misuse may result in account suspension or termination.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">3. Content Ownership</h3>
					<p>
						All content posted by users remains their property, but by uploading it to FindNest, you grant us the right
						to display and share that content on our platform.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">4. Termination</h3>
					<p>
						We reserve the right to suspend or terminate accounts that violate our policies or harm the community in any
						way, with or without prior notice.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">5. Disclaimer of Liability</h3>
					<p>
						FindNest is not liable for any direct or indirect damages that may arise from using the platform, including
						miscommunications between users or false information in listings.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">6. Changes to Terms</h3>
					<p>
						We may update these terms from time to time. Continued use of the site means you accept the revised terms.
						Please review this page regularly for updates.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">7. Contact Us</h3>
					<p>
						For any questions or concerns about these Terms & Conditions, please contact us at:
						<br />
						<span className="font-medium">Email:</span> terms@findnest.com <br />
						<span className="font-medium">Phone:</span> +1 202-555-3333
					</p>
				</div>

				<p className="text-sm text-base-content">Last updated: June 25, 2025</p>
			</section>
		</div>
	);
};

export default TermsConditions;

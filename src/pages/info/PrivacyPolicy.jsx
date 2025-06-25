import React, { useEffect } from "react";

const PrivacyPolicy = () => {
	useEffect(() => {
		document.title = "Privacy Policy - FindNest";
	}, []);
	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Privacy Policy</h2>
				<p className="mb-8 text-base-content">
					Learn how we protect your personal information at FindNest. This Privacy Policy outlines how we collect, use,
					and safeguard your data when you use our website (https://b11a10-findnest.web.app/) or services, ensuring your
					privacy and security are prioritized.
				</p>
			</div>
			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg">
				<h3 className="text-xl font-semibold mb-3 text-primary">1. Information We Collect</h3>
				<p className="mb-6 text-base-content">
					We may collect personal information including your name, email address, phone number, location, and
					preferences when you register, post listings, or interact with our website.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">2. How We Use Your Information</h3>
				<p className="mb-6 text-base-content">
					We use your data to provide personalized roommate matching, improve our services, send important
					notifications, and respond to your inquiries. Your information helps us tailor your experience on FindNest.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">3. Data Sharing and Disclosure</h3>
				<p className="mb-6 text-base-content">
					We never sell or rent your personal information. We may share limited data with trusted service providers who
					assist us in operating our website, as long as they agree to keep it confidential.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">4. Security of Your Information</h3>
				<p className="mb-6 text-base-content">
					We implement industry-standard security measures to protect your data from unauthorized access, alteration, or
					disclosure. However, no method is 100% secure, and we cannot guarantee absolute security.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">5. Your Choices</h3>
				<p className="mb-6 text-base-content">
					You may review, update, or delete your account at any time. You can also opt out of marketing emails or manage
					cookie settings via your browser.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">6. Third-Party Links</h3>
				<p className="mb-6 text-base-content">
					Our website may contain links to other websites. We are not responsible for their privacy practices and
					encourage you to read their privacy policies.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">7. Changes to This Policy</h3>
				<p className="mb-6 text-base-content">
					We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised date.
					Continued use of the site means you accept those changes.
				</p>

				<h3 className="text-xl font-semibold mb-3 text-primary">8. Contact Us</h3>
				<p className="mb-6 text-base-content">
					If you have questions about this Privacy Policy, feel free to contact us at:
					<br />
					<span className="font-medium">Email:</span> info@findnest.com <br />
					<span className="font-medium">Phone:</span> +1 202-555-4567
				</p>

				<p className="text-sm text-base-content">Last updated: June 25, 2025</p>
			</section>
		</div>
	);
};

export default PrivacyPolicy;

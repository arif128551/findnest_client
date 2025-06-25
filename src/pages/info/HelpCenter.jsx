import React, { useEffect } from "react";

const HelpCenter = () => {
	useEffect(() => {
		document.title = "Help Center - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Help Center</h2>
				<p className="mb-8 text-base-content">
					Need assistance? You're in the right place. The FindNest Help Center is here to guide you with quick answers,
					troubleshooting tips, and ways to contact support.
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg text-base-content space-y-10">
				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Getting Started</h3>
					<p>
						New to FindNest? Start by creating an account, setting up your profile, and browsing available rooms or
						roommates. If you need help setting things up, visit our <span className="underline">FAQs</span> or contact
						support.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Troubleshooting Common Issues</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Can’t log in? Try resetting your password or clearing browser cache.</li>
						<li>Profile not showing? Make sure your account is verified and active.</li>
						<li>Not receiving emails? Check your spam/junk folder and add our email to your safe list.</li>
					</ul>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Account & Security</h3>
					<p>
						We take user privacy seriously. You can update your account settings anytime and enable additional security
						like email verification. If you notice suspicious activity, report it immediately.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Contact Our Support Team</h3>
					<p>
						Still stuck? Our support team is here to help you 7 days a week.
						<br />
						<span className="font-medium">Email:</span> support@findnest.com
						<br />
						<span className="font-medium">Live Chat:</span> Available 10am – 6pm (Mon–Fri)
						<br />
						<span className="font-medium">Phone:</span> +1 202-555-7890
					</p>
				</div>

				<p className="text-sm text-base-content">Last updated: June 25, 2025</p>
			</section>
		</div>
	);
};

export default HelpCenter;

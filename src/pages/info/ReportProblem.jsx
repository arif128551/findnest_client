import React, { useEffect } from "react";

const ReportProblem = () => {
	useEffect(() => {
		document.title = "Report a Problem - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Report a Problem</h2>
				<p className="mb-8 text-base-content">
					If you’ve encountered an issue on FindNest, we’re here to help. Please review the common problems below or
					report your specific issue so our team can investigate and respond as quickly as possible.
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg text-base-content space-y-10">
				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Common Issues You Can Report</h3>
					<ul className="list-disc list-inside space-y-2">
						<li>Fake or misleading listings</li>
						<li>Inappropriate messages or behavior</li>
						<li>Technical errors or bugs on the website</li>
						<li>Account access or login issues</li>
					</ul>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">How to Report</h3>
					<p>
						Please email us with a clear description of the problem, screenshots if possible, and any relevant user or
						listing information. This helps us resolve the issue faster and more accurately.
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Contact Information</h3>
					<p>
						<span className="font-medium">Report Email:</span> report@findnest.com
						<br />
						<span className="font-medium">Phone:</span> +1 202-555-9999
						<br />
						<span className="font-medium">Response Time:</span> Within 24–48 hours
					</p>
				</div>

				<div>
					<h3 className="text-xl font-semibold mb-3 text-primary">Your Safety Matters</h3>
					<p>
						FindNest is committed to maintaining a safe and respectful community. Every report is reviewed carefully and
						appropriate action is taken. We encourage all users to speak up and help us improve the platform.
					</p>
				</div>

				<p className="text-sm text-base-content">Last updated: June 25, 2025</p>
			</section>
		</div>
	);
};

export default ReportProblem;

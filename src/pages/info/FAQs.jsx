import React, { useEffect } from "react";

const FAQs = () => {
	useEffect(() => {
		document.title = "FAQs - FindNest";
	}, []);

	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Frequently Asked Questions</h2>
				<p className="mb-8 text-base-content">
					Have questions about how FindNest works? We’ve got answers! Browse through the most common questions to get
					quick help and clarity.
				</p>
			</div>

			<section className="bg-base-200/30 p-8 lg:p-14 rounded-lg text-base-content space-y-10">
				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">1. What is FindNest?</h3>
					<p>
						FindNest is an online platform that helps people find compatible roommates and available living spaces
						easily and securely.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">2. How do I create an account?</h3>
					<p>
						Click on the "Sign Up" button on the homepage and register using your email, Google account, or other
						supported methods. It only takes a minute!
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">3. Is FindNest free to use?</h3>
					<p>
						Yes! Creating an account and browsing listings is completely free. Premium features may be introduced in the
						future with added benefits.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">4. How are listings verified?</h3>
					<p>
						Our team reviews listings and profiles for authenticity. We also encourage users to verify their identity
						and report any suspicious activity.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">5. Can I contact other users?</h3>
					<p>Yes, you can securely message other users through our built-in messaging system once you're logged in.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">6. I forgot my password. What should I do?</h3>
					<p>Go to the login page and click on "Forgot Password" to receive a reset link via email.</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-2 text-primary">7. How can I delete my account?</h3>
					<p>
						Go to your account settings and choose "Delete Account". If you face any issue, contact our support team at{" "}
						<span className="font-medium">support@findnest.com</span>.
					</p>
				</div>
			</section>
		</div>
	);
};

export default FAQs;

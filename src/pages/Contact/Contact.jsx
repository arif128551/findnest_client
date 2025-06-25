import React, { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact Us | FindNest";
	}, []);
	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="pb-5 lg:max-w-10/12 mx-auto text-center">
				<h2 className="text-2xl xl:text-4xl font-bold mb-5 text-primary">Contact Us</h2>
				<p className="mb-8 text-base-content">
					Get in touch with us by filling out the form below. Whether you have questions, feedback, or need assistance,
					provide your details and message, and our team will respond promptly. Your name and email are pre-filled for
					your convenience.
				</p>
			</div>
			<form className="bg-base-200/30 p-8 lg:p-14 rounded-lg">
				<div className="flex justify-between sm:gap-6 flex-col sm:flex-row">
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="input w-full px-4 py-6 text-primary border border-base-300/70 mb-6"
							required
						/>
					</div>
					<div className="sm:w-1/2">
						<label className="text-lg/snug font-bold text-primary mb-2 block">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="input w-full px-4 py-6 border border-base-300/70 mb-6 text-primary"
							required
						/>
					</div>
				</div>

				<label className="text-lg/snug font-bold text-primary mb-2 block">Message</label>
				<textarea
					name="description"
					className="input w-full p-4 text-primary border border-base-300/70 mb-4 h-24"
					placeholder="Enter description"
				></textarea>
				<button
					type="submit"
					className="mt-4 py-3 px-4.5 text-xl rounded-md font-bold text-white transition cursor-pointer bg-base-300/80 hover:bg-base-300"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;

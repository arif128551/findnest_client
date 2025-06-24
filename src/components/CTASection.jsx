import React from "react";
import imgRoommate from "../assets/ready-to-find-your-roommate.png";
const CTASection = () => {
	return (
		<div className="px-4">
			<div className="container max-w-7xl mx-auto bg-secondary rounded-[20px] flex md:justify-between relative mt-15 xl:mt-50 min-h-[auto]  flex-col-reverse md:flex-row p-5 lg:p-0">
				<div className="lg:max-w-[600px] flex flex-col justify-center lg:pl-20 md:py-14 pt-5">
					<div className="pb-4 lg:pb-0">
						<h3 className="text-2xl md:text-4xl/snug text-white font-semibold mb-4">
							Ready to Find Your Perfect Roommate?
						</h3>
						<p className="text-white mb-5 lg:mb-10">
							Browse listings tailored to your lifestyle, location & budget. Start your roommate journey today!
						</p>
						<button className="text-xs sm:text-sm transition text-primary bg-white hover:bg-primary hover:text-white font-semibold py-2.5 px-5 rounded-lg cursor-pointer">
							Get Started Now
						</button>
					</div>
				</div>
				<div className="xl:absolute lg:bottom-0 xl:right-5 ">
					<img src={imgRoommate} alt="ready to find your perfect roommate" />
				</div>
			</div>
		</div>
	);
};

export default CTASection;

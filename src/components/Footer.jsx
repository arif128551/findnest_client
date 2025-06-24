import React from "react";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import { Link, NavLink } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import CTASection from "./CTASection";
const Footer = ({ theme }) => {
	return (
		<>
			<CTASection></CTASection>
			<div className="footer lg:pt-24 px-4 md:pt-16 pt-12">
				<div className="container max-w-7xl mx-auto">
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pb-8 lg:pb-15 gap-10 lg:gap-15 text-center sm:text-left">
						<div>
							<h3 className="text-primary font-semibold text-xl mb-5 lg:mb-10">Services</h3>
							<ul className="space-y-4 text-primary/60">
								<li>
									<NavLink>Roommate Finder</NavLink>
								</li>
								<li>
									<NavLink>Browse Listing</NavLink>
								</li>
								<li>
									<NavLink>Add Listing</NavLink>
								</li>
								<li>
									<NavLink>Saved Items</NavLink>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-primary font-semibold text-xl mb-5 lg:mb-10">Resources</h3>
							<ul className="space-y-4 text-primary/60">
								<li>
									<NavLink to="/terms-conditions">Help Center</NavLink>
								</li>
								<li>
									<NavLink to="/privacy-policy">Report a Problem</NavLink>
								</li>
								<li>
									<NavLink to="/404">Community Blog</NavLink>
								</li>
								<li>
									<NavLink to="/404">FAQs</NavLink>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-primary font-semibold text-xl mb-5 lg:mb-10">Company</h3>
							<ul className="space-y-4 text-primary/60">
								<li>
									<NavLink to="/terms-conditions">About Us</NavLink>
								</li>
								<li>
									<NavLink to="/privacy-policy">Careers</NavLink>
								</li>
								<li>
									<NavLink to="/404">Terms & Conditions</NavLink>
								</li>
								<li>
									<NavLink to="/404">Privacy Policy</NavLink>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-primary font-semibold text-xl mb-5 lg:mb-10">Connect with us</h3>
							<p className="text-primary/60 mb-3">
								<span className="block mb-1 text-xs font-light">DM Us on</span> info@findNest.com
							</p>
							<p className="text-primary/60 mb-6">
								<span className="block mb-1 text-xs font-light">Call Us on</span> +1 212 555 4567
							</p>
							<ul className="flex gap-2 sm:gap-3 flex-wrap text-primary justify-center sm:justify-start">
								<li className="bg-info p-3 rounded-sm">
									<Link to="https://www.facebook.com/xoss.arif" target="_blank">
										<FaFacebookF size={15} />
									</Link>
								</li>
								<li className="bg-info p-3 rounded-sm">
									<Link to="https://x.com/xoss_arif" target="_blank">
										<FaXTwitter size={15} />
									</Link>
								</li>
								<li className="bg-info p-3 rounded-sm">
									<Link to="https://www.linkedin.com/in/arif128551/" target="_blank">
										<FaLinkedinIn size={15} />
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="pb-8 md:pb-15 text-center flex flex-col gap-5 sm:flex-row justify-between items-center w-full">
						<div>
							<img src={theme ? logoLight : logoDark} alt={theme ? "logo light" : "logo dark"} />
						</div>
						<p className="text-sm">All Rights Reserved. &copy; 2025 FindNest</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

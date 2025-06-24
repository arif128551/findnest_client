import React from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import reviewer1 from "../../../assets/testimonials/reviewer1.png";
import reviewer2 from "../../../assets/testimonials/reviewer2.png";
import reviewer3 from "../../../assets/testimonials/reviewer3.png";
import reviewer4 from "../../../assets/testimonials/reviewer4.png";
import reviewer5 from "../../../assets/testimonials/reviewer5.png";
import reviewer6 from "../../../assets/testimonials/reviewer6.png";
const testimonials = [
	{
		id: 1,
		image: reviewer1,
		name: "Emily Carter",
		role: "Student, UCLA",
		feedback: "FindNest made it super easy to find a roommate as a student. Safe, fast, and reliable!",
	},
	{
		id: 2,
		image: reviewer2,
		name: "Jason Miller",
		role: "Software Engineer, Austin TX",
		feedback: "With a busy work schedule, FindNest helped me find a roommate based on my location and lifestyle.",
	},
	{
		id: 3,
		image: reviewer3,
		name: "Samantha Lee",
		role: "Freelancer, Brooklyn NY",
		feedback: "I needed a pet-friendly roommate and FindNest's filters gave me the perfect match without hassle!",
	},
	{
		id: 4,
		image: reviewer4,
		name: "Michael Johnson",
		role: "MBA Student, Chicago Booth",
		feedback: "Finding someone within my budget and location was a blessing. Huge thanks to FindNest!",
	},
	{
		id: 5,
		image: reviewer5,
		name: "Rachel Gomez",
		role: "Nonprofit Worker, Seattle WA",
		feedback: "The verified profiles on FindNest helped me find a trusted roommate. The UI is also super friendly!",
	},
	{
		id: 6,
		image: reviewer6,
		name: "Chris Anderson",
		role: "Graphic Designer, San Diego",
		feedback: "Loved how I could filter based on lifestyle and availability. FindNest is simply amazing.",
	},
];
const Testimonials = () => {
	return (
		<section>
			<h2 className="xl:text-3xl/snug text-2xl font-bold pb-6 lg:pb-12 text-primary lg:text-center text-left max-w-[596px] mx-auto">
				Our blessed clients said about their experience
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{testimonials.map((item) => (
					<TestimonialCard key={item.id} {...item} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;

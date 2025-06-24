import React from "react";
import LifestyleCard from "./LifestyleCard/LifestyleCard";
import lifestyleImg from "../../../assets/explore-roommates-by-lifestyle.jpg";
import petFriendlyIcon from "../../../assets/lifestyle/pet-friendly.png";
import nonSmokerIcon from "../../../assets/lifestyle/non-smoker.png";
import nightOwlIcon from "../../../assets/lifestyle/night-owl.png";
import echoConsciousIcon from "../../../assets/lifestyle/eco-conscious.png";
const Lifestyle = () => {
	const lifestyleData = [
		{
			id: 1,
			icon: <img src={petFriendlyIcon} alt="Pet Friendly" />,
			title: "Pet Friendly",
			description: "Roommates who are okay with pets in the house.",
		},
		{
			id: 2,
			icon: <img src={nonSmokerIcon} alt="Non-Smoker" />,
			title: "Non-Smoker",
			description: "Smoke-free environment seekers.",
		},
		{
			id: 3,
			icon: <img src={nightOwlIcon} alt="Night Owl" />,
			title: "Night Owl",
			description: "Prefer staying up late and active at night.",
		},
		{
			id: 4,
			icon: <img src={echoConsciousIcon} alt="Eco-Conscious" />,
			title: "Eco-Conscious",
			description: "Roommates who care about sustainable living.",
		},
	];
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8 items-center">
			<div>
				<img src={lifestyleImg} alt="Roommates talking" className="rounded-3xl w-full object-cover" />
			</div>
			<div>
				<h2 className="xl:text-3xl text-2xl font-bold mb-4 text-primary">Explore Roommates by Lifestyle</h2>
				<p className="text-base text-base-content mb-6">
					Whether you're a night owl, pet lover, or prefer a smoke-free home, find roommates that match your lifestyle.
					Explore categories and choose what suits you best.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
					{lifestyleData.map((item) => (
						<LifestyleCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Lifestyle;

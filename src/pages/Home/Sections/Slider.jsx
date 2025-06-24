import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import slide1Img from "../../../assets/slider/slide-one.png";
import slide2Img from "../../../assets/slider/slide-two.png";
import slide3Img from "../../../assets/slider/slide-three.png";
const Slider = () => {
	const slides = [
		{
			heading: "Discover a place you'll love to live.",
			text: "Get the best real estate deals first, before they hit the mass market! Hot foreclosure deals with one simple search",
			image: slide1Img,
		},
		{
			heading: "Safe homes. Smart choices. Always",
			text: "Live with people you trust in locations you love— start with one easy listing and connect instantly",
			image: slide2Img,
		},
		{
			heading: "Find roommates who match your vibe",
			text: "Find verified roommate listings near you— built for students, workers & everyone in between",
			image: slide3Img,
		},
	];
	return (
		<div className="bg-base-200 px-4">
			<Swiper
				pagination={{ clickable: true }}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				modules={[Pagination, Autoplay]}
				loop={true}
				className="homeSwiper"
				spaceBetween={30}
				slidesPerView={1}
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="max-w-7xl mx-auto">
							<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:py-20 pt-10 pb-15 rounded-2xl">
								<div className="max-w-xl text-center lg:text-left">
									<h2 className="text-2xl xl:text-5xl/snug font-bold text-primary mb-6 leading-snug">
										{slide.heading}
									</h2>
									<p className="text-base-content text-lg leading-relaxed mb-8">{slide.text}</p>
									<button className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-secondary transition">
										More About Us
									</button>
								</div>
								<div className="flex-shrink-0">
									<img src={slide.image} alt={slide.heading} className="max-w-[480px] w-full rounded-xl" />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;

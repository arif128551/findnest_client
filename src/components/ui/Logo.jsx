import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";

const Logo = ({ theme }) => {
	return (
		<div className="relative w-32 h-12">
			<img
				src={theme ? logoLight : logoDark}
				alt={theme ? "logo light" : "logo dark"}
				className="w-full h-full object-contain"
			/>
		</div>
	);
};

export default Logo;

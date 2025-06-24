import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ theme, setTheme }) => {
	return (
		<button
			onClick={() => setTheme(!theme)}
			className="p-2 rounded-full hover:bg-base-300 transition cursor-pointer"
			aria-label="Toggle Theme"
		>
			{theme ? <FaMoon className="text-xl text-gray-700" /> : <FaSun className="text-xl text-yellow-400" />}
		</button>
	);
};

export default ThemeToggle;

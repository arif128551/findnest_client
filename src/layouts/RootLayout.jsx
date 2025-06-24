import React, { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import PageLoader from "../components/ui/PageLoader";
import { AuthContext } from "../contexts/auth/AuthContext";

const RootLayout = () => {
	const { loading } = use(AuthContext);
	const [theme, setTheme] = useState(true);
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme === "light");
		}
	}, []);

	const handleThemeToggle = () => {
		const newTheme = !theme;
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme ? "light" : "dark");
	};

	if (loading || isLoading) {
		return <PageLoader />;
	}
	return (
		<div data-theme={`${theme ? "light" : "dark"}`}>
			<Navbar setTheme={handleThemeToggle} theme={theme}></Navbar>
			<Outlet></Outlet>
			<Footer theme={theme}></Footer>
		</div>
	);
};

export default RootLayout;

import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/auth/AuthContext";
import signupImg from "../../assets/signup-findnest.jpg";
import axios from "axios";

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { createUser, setUser, updateUser, googleSignIn, setLoading } = use(AuthContext);
	const navigate = useNavigate();
	const handleRegister = async (e) => {
		e.preventDefault();

		const displayName = e.target.name.value;
		const photoURL = e.target.photo.value;
		const email = e.target.email.value;
		const password = e.target.password.value;

		if (!displayName.trim()) {
			toast.error("Display Name is required!");
			return;
		}

		if (!email.trim()) {
			toast.error("Email is required!");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.trim())) {
			toast.error("Please enter a valid email address!");
			return;
		}

		if (password.length < 6) {
			toast.error("Password must be at least 6 characters long.");
			return;
		}

		if (!/[A-Z]/.test(password)) {
			toast.error("Password must contain at least one uppercase letter.");
			return;
		}

		if (!/[a-z]/.test(password)) {
			toast.error("Password must contain at least one lowercase letter.");
			return;
		}

		setLoading(true);
		try {
			const userCredential = await createUser(email, password);
			const user = userCredential.user;

			await updateUser({ displayName, photoURL });
			setUser({ ...user, displayName, photoURL });

			const userProfile = {
				displayName,
				photoURL,
				email,
				creationTime: user.metadata?.creationTime,
				lastSignInTime: user.metadata?.lastSignInTime,
			};

			await axios.post(`${import.meta.env.VITE_apiUrl}/users`, userProfile);

			toast.success("Registration successful!");
			navigate("/");
		} catch (error) {
			toast.error(error.message || "Registration failed. Please provide valid information.");
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleBtnLogin = async () => {
		try {
			const result = await googleSignIn();
			const user = result.user;
			const { creationTime, lastSignInTime } = user.metadata;

			const response = await axios.post(`${import.meta.env.VITE_apiUrl}/users`, {
				email: user.email,
				displayName: user.displayName,
				photoURL: user.photoURL,
				creationTime,
				lastSignInTime,
			});

			const data = response.data;

			if (data.status === "new") {
				toast.success("Account created successfully with Google!");
			} else {
				toast.success("Welcome back! You've logged in with Google.");
			}
			navigate("/");
		} catch (error) {
			toast.error(error.message || "Google login failed.");
		}
	};

	useEffect(() => {
		document.title = "Sign Up | FindNest";
	}, []);
	return (
		<div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24">
			<div className="flex">
				<div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-15 bg-base-200/30">
					<h2 className="text-2xl xl:text-4xl font-bold mb-2 text-primary">Create an account</h2>
					<p className="mb-8 text-base-content">Join FindNest to get started</p>
					<form onSubmit={handleRegister}>
						<div className="fieldset">
							<label className="text-lg/snug font-bold text-primary mb-2">Name</label>
							<input
								type="text"
								name="name"
								className="input w-full p-6 text-primary border border-base-300/70 mb-4"
								placeholder="Enter your name"
							/>
							<label className="text-lg/snug font-bold text-primary mb-2">Email address</label>
							<input
								type="email"
								name="email"
								className="input w-full p-6 text-primary border border-base-300/70 mb-4"
								placeholder="Enter your email address"
							/>
							<label className="text-lg/snug font-bold text-primary mb-2">Photo URL</label>
							<input
								type="text"
								name="photo"
								className="input w-full p-6 text-primary border border-base-300/70 mb-4"
								placeholder="Enter photo url"
							/>

							<label className="text-lg/snug font-bold text-primary mb-2">Password</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									className="input w-full p-6 text-primary border border-base-300/70 mb-2  focus:outline-black focus:outline-2"
									placeholder="Enter your password"
									autoComplete="autocomplete"
								/>
								<span
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
								>
									{showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
								</span>
							</div>
							<button
								type="submit"
								className="mt-4 p-3 mb-3 text-xl rounded-md text-white font-medium transition cursor-pointer bg-primary"
							>
								Register
							</button>
						</div>
					</form>
					<button
						onClick={handleGoogleBtnLogin}
						className="btn min-h-12 bg-white text-primary border-[#e5e5e5] w-full rounded-lg"
					>
						<svg
							aria-label="Google logo"
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<g>
								<path d="m0 0H512V512H0" fill="#fff"></path>
								<path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
								<path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
								<path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
								<path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
							</g>
						</svg>
						Login with Google
					</button>
					<p className="mt-6 text-sm text-center">
						Have An Account ?{" "}
						<Link to="/login" className="hover:link">
							Login
						</Link>
					</p>
				</div>

				<div className="hidden md:flex w-1/2 items-center justify-center">
					<img src={signupImg} alt="Signup Page Image" className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	);
};

export default Register;

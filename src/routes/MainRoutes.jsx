import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound";
import RoomListingDetails from "../pages/RoomDetails/RoomListingDetails";
import BrowseListing from "../pages/BrowseListing/BrowseListing";
import MyListings from "../pages/MyListings/MyListings";
import AddFindRoommate from "../pages/AddFindRoommate/AddFindRoommate";
import PrivateRoute from "./PrivateRoute";
import PageLoader from "../components/ui/PageLoader";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/info/PrivacyPolicy";
import AboutUs from "../pages/info/AboutUs";
import Careers from "../pages/info/Careers";
import Community from "../pages/info/Community";
import FAQs from "../pages/info/FAQs";
import HelpCenter from "../pages/info/HelpCenter";
import ReportProblem from "../pages/info/ReportProblem";
import TermsConditions from "../pages/info/TermsConditions";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import AllListings from "../pages/dashboard/AllListings/AllListings";
import AddListing from "../pages/dashboard/AddListing/AddListing";
import DashboardMyListings from "../pages/dashboard/MyListings/DashboardMyListings";
import axios from "axios";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				Component: Home,
				loader: () => axios.get(`${import.meta.env.VITE_apiUrl}/roommates/available`).then((res) => res.data),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/browse-listing",
				Component: BrowseListing,
				loader: () => axios.get(`${import.meta.env.VITE_apiUrl}/roommates/`).then((res) => res.data),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/listing/:id",
				element: (
					<PrivateRoute>
						<RoomListingDetails></RoomListingDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					axios.get(`${import.meta.env.VITE_apiUrl}/roommates/${params.id}`).then((res) => res.data),
				hydrateFallbackElement: <PageLoader />,
			},
			// {
			// 	path: "/my-listings",
			// 	element: (
			// 		<PrivateRoute>
			// 			<MyListings></MyListings>
			// 		</PrivateRoute>
			// 	),
			// },
			// {
			// 	path: "/add-find-roommate",
			// 	element: (
			// 		<PrivateRoute>
			// 			<AddFindRoommate></AddFindRoommate>
			// 		</PrivateRoute>
			// 	),
			// },
			{
				path: "/contact",
				Component: Contact,
			},
			{
				path: "/about-us",
				Component: AboutUs,
			},
			{
				path: "/privacy-policy",
				Component: PrivacyPolicy,
			},
			{
				path: "/careers",
				Component: Careers,
			},
			{
				path: "/community",
				Component: Community,
			},
			{
				path: "/faq",
				Component: FAQs,
			},
			{
				path: "/help-center",
				Component: HelpCenter,
			},
			{
				path: "/report-problem",
				Component: ReportProblem,
			},
			{
				path: "/terms-conditions",
				Component: TermsConditions,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/signup",
				Component: Register,
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				index: true,
				element: (
					<PrivateRoute>
						<Dashboard></Dashboard>
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/all-listings",
				element: (
					<PrivateRoute>
						<AllListings></AllListings>
					</PrivateRoute>
				),
				loader: () => axios.get(`${import.meta.env.VITE_apiUrl}/roommates/`).then((res) => res.data),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/dashboard/add-listing",
				element: (
					<PrivateRoute>
						<AddListing></AddListing>
					</PrivateRoute>
				),
			},
			{
				path: "/dashboard/my-listings",
				element: (
					<PrivateRoute>
						<DashboardMyListings></DashboardMyListings>
					</PrivateRoute>
				),
			},
		],
	},
]);

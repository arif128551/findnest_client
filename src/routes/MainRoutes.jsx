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

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				Component: Home,
				loader: () => fetch("https://b11a10-findnest-server.vercel.app/api/roommates/available"),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/browse-listing",
				Component: BrowseListing,
				loader: () => fetch("https://b11a10-findnest-server.vercel.app/api/roommates/"),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/listing/:id",
				element: (
					<PrivateRoute>
						<RoomListingDetails></RoomListingDetails>
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://b11a10-findnest-server.vercel.app/api/roommates/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/my-listings",
				element: (
					<PrivateRoute>
						<MyListings></MyListings>
					</PrivateRoute>
				),
			},
			{
				path: "/add-find-roommate",
				element: (
					<PrivateRoute>
						<AddFindRoommate></AddFindRoommate>
					</PrivateRoute>
				),
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
]);

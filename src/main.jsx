import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./contexts/auth/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/MainRoutes.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<Toaster position="top-right" />
		</AuthProvider>
	</StrictMode>
);

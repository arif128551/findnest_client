import React, { useEffect, useState } from "react";

import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signInUserWithEmailPass = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const updateUser = (updateUserData) => {
		return updateProfile(auth.currentUser, updateUserData);
	};

	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser) {
				const token = await currentUser.getIdToken();
				setUser({
					...currentUser,
					token,
					getIdToken: () => currentUser.getIdToken(),
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unSubscribe();
	}, []);

	const userInfo = {
		user,
		setUser,
		createUser,
		signInUserWithEmailPass,
		signOutUser,
		updateUser,
		googleSignIn,
		loading,
		setLoading,
	};
	return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

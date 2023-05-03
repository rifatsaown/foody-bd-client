/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // Create user & loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create sign in with email and password function
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Create sign in with google function
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleprovider);
  };
  // Create sign in with github function
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubprovider);
  };

  // Create log out function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Create authInfo object and provide it to children components
  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    signInWithEmail,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

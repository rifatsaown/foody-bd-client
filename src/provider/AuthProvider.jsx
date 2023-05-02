/* eslint-disable react/prop-types */
import  { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    // Create user state
    const [user, setUser] = useState(null);
    // Create sign in with google function
    const signInWithGoogle = () => {
        return signInWithPopup(auth,googleprovider);
    };
    // Create sign in with github function
    const signInWithGithub = () => {
        return signInWithPopup(auth,githubprovider);
    };

    // Create log out function
    const logOut = () => {
        return signOut(auth);
    };

    // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setUser(user)
        });
        return () => unsubscribe();
    }, []);

    // Create authInfo object and provide it to children components
    const authInfo = {
        user,
        signInWithGoogle,
        logOut,
        signInWithGithub,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
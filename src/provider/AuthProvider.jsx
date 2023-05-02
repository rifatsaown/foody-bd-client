/* eslint-disable react/prop-types */
import  { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        return signInWithPopup(auth,googleprovider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            setUser(user)
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        signInWithGoogle,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
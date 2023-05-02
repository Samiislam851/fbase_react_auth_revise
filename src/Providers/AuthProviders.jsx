import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../public/firbase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);




const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }
    console.log(user);

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                console.log('Starting onAuthChanged');
                if (user) {
                    setUser(user);
                    console.log('done in condition onAuth changed');
                } 
                setLoading(false);
            });

        }
        return () => {
         return   unsubscribe();
        };
    }, []);


    const value = {
        user,
        createUser,
        loginUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
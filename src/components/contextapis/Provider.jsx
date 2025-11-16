import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../data_control/firebase/firebase.config";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // registration function
  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out function
  const logout = () => {
    return signOut(auth);
  };

  // firebase observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // (1st) all apis put this "authData" object
  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    registration,
    login,
    logout,
  };

  // (2nd) that components into this children there use all authData values
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default Provider;

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import Auth from "../Firbase/Firbase";
import { useEffect } from "react";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
    const [user, setUser] = useState("")
    const [lodding, setLodding]= useState(false)
    const Provider = new GoogleAuthProvider

    const RegisterUser = (email, Password) =>{
        setLodding(true)
        return createUserWithEmailAndPassword(Auth, email, Password)
    }
    const LoginUser = (email, Password) =>{
        setLodding(true)
        return signInWithEmailAndPassword(Auth, email, Password)
    }
    const LogoutUser = ()=>{
        setLodding(true)
        return signOut(Auth)
    }
    const GoogleSignUp = ()=>{
        setLodding(true)
        return signInWithPopup(Auth, Provider)
    }
    useEffect(()=>{
        const unSubcriber = onAuthStateChanged(Auth, currentUser=>{
            setUser(currentUser),
            setLodding(false)
        })
        return ()=>{
            return unSubcriber
        }
    },[])
    console.log(user)
    const AuthInfo = {
        RegisterUser,
        LoginUser,
        LogoutUser,
        GoogleSignUp,
        lodding,
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
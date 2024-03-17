import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";
import Skeletons from "../Components/Skeletons/Skeletons";

const Private = ({ children }) => {
    
    const { lodding, user } = useContext(AuthContext)
    if (user) {
        return children
    }
    if (lodding) {
        return <Skeletons></Skeletons>
    }

    return <Navigate to="/Register"></Navigate>
};

export default Private;
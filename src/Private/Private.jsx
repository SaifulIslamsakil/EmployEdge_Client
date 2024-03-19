import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";
// import { Spinner } from "keep-react";
import Skeleton from "../Components/Skeletons/Skeletons"
const Private = ({ children }) => {
    
    const { lodding, user } = useContext(AuthContext)
    if (user) {
        return children
    }
    if (lodding) {
        return  <Skeleton></Skeleton>
    }

    return <Navigate to="/Register"></Navigate>
};

export default Private;
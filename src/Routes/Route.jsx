import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Private from "../Private/Private";
import Dashbords from "../Pages/Dashbords/Dashbords";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:"?",
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    },
    {
        path:"/Register",
        element:<SignUp></SignUp>
    },
    {
        path:"/Dashbords",
        element:<Private><Dashbords></Dashbords></Private>
    }
])

export default Routes

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Private from "../Private/Private";
import Dashbords from "../Pages/Dashbords/Dashbords";
import DashbordLayout from "../Layout/DashbordLayout/DashbordLayout";
import Login from "../Pages/Login/Login";

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
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/Dashbords",
        element:<Private> <DashbordLayout></DashbordLayout></Private>,
        children:[
            {
                path:"/Dashbords",
                element:<Dashbords></Dashbords>
            }
        ]
    }
])

export default Routes

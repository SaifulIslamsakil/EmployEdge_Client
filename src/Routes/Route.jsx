import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Private from "../Private/Private";
import Dashbords from "../Pages/Dashbords/Dashbords";
import DashbordLayout from "../Layout/DashbordLayout/DashbordLayout";
import Login from "../Pages/Login/Login"
import Employeelist from "../Pages/employeelist/employeelist";
import Progress from "../Pages/progress/Progress";
import PaymentHistory from "../Pages/payment-history/PaymentHistory";
import WorkSheet from "../Pages/work-sheet/WorkSheet";
import AllEmployeeList from "../Pages/all-employee-list/AllEmployeeList";
import EmployeeDetails from "../Pages/EmployeeDetails/EmployeeDetails";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
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
                element:<Private><Dashbords></Dashbords></Private>
            },
            {
                path:"/Dashbords/employee-list",
                element:<Private><Employeelist></Employeelist></Private>
            },
            {
                path:"/Dashbords/progress",
                element:<Private><Progress></Progress></Private>
            },
            {
                path:"/Dashbords/payment-history",
                element:<Private><PaymentHistory></PaymentHistory></Private>
            },
            {
                path:"/Dashbords/work-sheet",
                element:<Private><WorkSheet></WorkSheet></Private>
            },
            {
                path:"/Dashbords/work-sheet",
                element:<Private><WorkSheet></WorkSheet></Private>
            },
            {
                path:"/Dashbords/all-employee-list",
                element:<Private><AllEmployeeList></AllEmployeeList></Private>
            },
            {
                path:"/Dashbords/employeeDetails",
                element:<Private><EmployeeDetails></EmployeeDetails></Private>
            },
        ]
    }
])

export default Routes

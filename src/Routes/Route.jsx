import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

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
    }
])

export default Routes
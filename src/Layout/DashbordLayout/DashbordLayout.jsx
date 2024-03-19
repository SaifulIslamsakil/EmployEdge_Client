import { NavLink, Outlet } from "react-router-dom";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import Logo from "../../assets/logo (2).png"
import { MdComputer } from "react-icons/md";
import { PiUsersBold } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import useAxiosPublic from "../../Hooks/useAxiosPulic/useAxiosPulic"
import { useQuery } from "@tanstack/react-query";

const DashbordLayout = () => {
    const [dasSidebarToggel, setDasSiderbarToggel] = useState(true)
    const AxiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)

    const { data: AllEmployeeList = [], refetch } = useQuery({
        queryKey: ['AllEmployeeList'],
        queryFn: async () => {
            const res = await AxiosPublic.get("/allEmployeeList")
            return res.data
        }
    })
    const findUser = AllEmployeeList.find(EmployeeList => EmployeeList?.email === user?.email)
    console.log(findUser)


    const DashMenu = <>
        <li>
            <NavLink
                to="/Dashbords"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center gap-2 border-l-2 border-sky-500 text-blue-700 border-b-2 p-2" : " flex items-center gap-2  hover:border-l-2 hover:border-sky-500 hover:text-blue-700 hover:border-b-2 duration-500 p-2  "
                }
            >

                <MdComputer /> {dasSidebarToggel && <span>Dashbord</span>}
            </NavLink>
        </li>
        <li className={`${findUser?.role === "HR"? "block":"hidden"}`}>
            <NavLink
                to="/Dashbords/employee-list"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center gap-2 border-l-2 border-sky-500 text-blue-700 border-b-2 p-2" : " flex items-center gap-2  hover:border-l-2 hover:border-sky-500 hover:text-blue-700 hover:border-b-2 duration-500 p-2  "
                }
            >

                <PiUsersBold />  {dasSidebarToggel && <span>employee-list</span>}
            </NavLink>
        </li>
        <li className={`${findUser?.role === "HR"? "block":"hidden"}`}>
            <NavLink
                to="/Dashbords/progress"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center gap-2 border-l-2 border-sky-500 text-blue-700 border-b-2 p-2" : " flex items-center gap-2  hover:border-l-2 hover:border-sky-500 hover:text-blue-700 hover:border-b-2 duration-500 p-2  "
                }
            >

                <GiProgression /> {dasSidebarToggel && <span>progress</span>}
            </NavLink>
        </li>
        <li className={`${findUser?.role === "Employee"? "block":"hidden"}`}>
            <NavLink
                to="/Dashbords/payment-history"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center gap-2 border-l-2 border-sky-500 text-blue-700 border-b-2 p-2" : " flex items-center gap-2  hover:border-l-2 hover:border-sky-500 hover:text-blue-700 hover:border-b-2 duration-500 p-2  "
                }
            >

                <MdPayment /> {dasSidebarToggel && <span>payment-history</span>}
            </NavLink>
        </li>
        <li className={`${findUser?.role === "Employee"? "block":"hidden"}`}>
            <NavLink
                to="/Dashbords/work-sheet"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center gap-2 border-l-2 border-sky-500 text-blue-700 border-b-2 p-2" : " flex items-center gap-2  hover:border-l-2 hover:border-sky-500 hover:text-blue-700 hover:border-b-2 duration-500 p-2  "
                }
            >

                <FaNetworkWired /> {dasSidebarToggel && <span>work-sheet</span>}
            </NavLink>
        </li>
        <li className={`${findUser?.role === "Admin"? "block":"hidden"}`}>
            <NavLink
                to="/Dashbords/all-employee-list"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "flex items-center gap-2 border-l-2 border-sky-500 text-blue-700 border-b-2 p-2" : " flex items-center gap-2  hover:border-l-2 hover:border-sky-500 hover:text-blue-700 hover:border-b-2 duration-500 p-2  "
                }
            >

                <PiUsersBold /> {dasSidebarToggel && <span>all-employee-list</span>}
            </NavLink>
        </li>
    </>
    return (
        <div className=" bg-slate-100  w-full flex">
            <div className={`bg-white  lg:block fixed lg:static z-40   shadow-lg ${dasSidebarToggel ? "w-80" : "hidden lg:w-28 "} h-screen py-5 border`} >
                <div className=" hidden lg:flex items-center">
                    <img className=" w-20 " src={Logo} alt="Logo" />
                    <h2 className={`${dasSidebarToggel ? "md:block" : "hidden"}  text-2xl font-semibold text-sky-400`}>Employ<span className=" text-blue-900">Edge</span></h2>
                </div>
                <ul className={` py-20  px-7 ${dasSidebarToggel ? "text-xl" : "text-2xl"} space-y-9`}>
                    {DashMenu}
                </ul>
            </div>
            <div className=" w-full">
                <DashNavbar
                    setDasSiderbarToggel={setDasSiderbarToggel}
                    dasSidebarToggel={dasSidebarToggel}
                ></DashNavbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashbordLayout;
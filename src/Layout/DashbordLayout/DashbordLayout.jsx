import { NavLink } from "react-router-dom";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import Logo from "../../assets/logo (2).png"
import { MdComputer } from "react-icons/md";

const DashbordLayout = () => {
    const DashMenu = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ?  "flex items-center gap-2 p-2 border-l rounded-lg" : " flex items-center gap-2  border-l-2 border-sky-500 text-blue-700 border-b-2 p-2  "
                }
            >

                <MdComputer /> <span>Dashbord</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ?  "flex items-center gap-2 p-2 border-l rounded-lg" : " flex items-center gap-2  border-l-2 border-sky-500 text-blue-700 border-b-2 p-2  "
                }
            >

                <MdComputer /> <span>Dashbord</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ?  "flex items-center gap-2 p-2 border-l rounded-lg" : " flex items-center gap-2  border-l-2 border-sky-500 text-blue-700 border-b-2 p-2  "
                }
            >

                <MdComputer /> <span>Dashbord</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ?  "flex items-center gap-2 p-2 border-l rounded-lg" : " flex items-center gap-2  border-l-2 border-sky-500 text-blue-700 border-b-2 p-2  "
                }
            >

                <MdComputer /> <span>Dashbord</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ?  "flex items-center gap-2 p-2 border-l rounded-lg" : " flex items-center gap-2  border-l-2 border-sky-500 text-blue-700 border-b-2 p-2  "
                }
            >

                <MdComputer /> <span>Dashbord</span>
            </NavLink>
        </li>
    </>
    return (
        <div className=" bg-slate-100 h-screen w-full flex">
            <div className=" bg-white shadow-lg w-72 h-screen py-5 border" >
                <div className=" flex items-center">
                    <img className=" w-20 " src={Logo} alt="Logo" />
                    <h2 className=" hidden md:block text-2xl font-semibold text-sky-400">Employ<span className=" text-blue-900">Edge</span></h2>
                </div>
                <ul className=" py-10 px-7 text-xl space-y-9">
                    {DashMenu}
                </ul>
            </div>
            <div className=" w-full">
                <DashNavbar></DashNavbar>
            </div>
        </div>
    );
};

export default DashbordLayout;
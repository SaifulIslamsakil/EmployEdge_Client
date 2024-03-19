import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo (2).png"
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
const Navbar = () => {
    const {user} = useContext(AuthContext)
    const menuItems = <>
    <li>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-500 text-white p-2 rounded-lg" : "hover:bg-sky-500 hover:text-white p-2 hover:rounded-lg"
            }
        >
            Home
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-500 text-white p-2 rounded-lg" : "hover:bg-sky-500 hover:text-white p-2 hover:rounded-lg"
            }
        >
            Services
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-500 text-white p-2 rounded-lg" : "hover:bg-sky-500 hover:text-white p-2 hover:rounded-lg"
            }
        >
            blog
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-500 text-white p-2 rounded-lg" : "hover:bg-sky-500 hover:text-white p-2 hover:rounded-lg"
            }
        >
            Contact us
        </NavLink>
    </li>
    <li >
        <NavLink
            to="/Dashbords"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-500 text-white p-2 rounded-lg" : "hover:bg-sky-500 hover:text-white p-2 hover:rounded-lg"
            }
        >
            Dashboard
        </NavLink>
    </li>
    <li className={`${user&& "hidden"}`}>
        <NavLink
            to="/Register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-sky-500 text-white p-2 rounded-lg" : "hover:bg-sky-500 hover:text-white p-2 hover:rounded-lg"
            }
        >
            Register
        </NavLink>
    </li>
</>
const [menu, setMenu] = useState(false)
    return (
        <nav className=" z-50 flex justify-between items-center p-5 bg-slate-50 shadow-xl relative  lg:fixed lg:w-[1280px]">
        <div className=" flex items-center">
            <img className=" w-24 " src={Logo} alt="Logo" />
            <h2 className=" hidden md:block text-2xl font-semibold text-sky-400">Employ<span className=" text-blue-900">Edge</span></h2>
        </div>
        <div>
            <ul className=" hidden  lg:flex items-center gap-3 text-lg text-blue-900 font-semibold ">
                {menuItems}
            </ul>
        </div>
        <div className=" flex items-center gap-3 md:gap-5 text-3xl text-blue-900">
            <p><IoMdNotifications /></p>
            <p ><FaUserCircle /></p>
            <p onClick={()=> setMenu(true)} className=" block lg:hidden"><LuMenu /></p>
        </div>

                   {/* Menu Side bar */}

        <div className={` w-full  h-screen bg-black bg-opacity-30 absolute top-0 left-0 ${menu ? "block duration-500":"hidden"}`}>
            <div className=" bg-white w-72 py-10 h-full relative">
                <div className=" flex items-center border-b-2 pb-5">
                    <img className=" w-24 " src={Logo} alt="Logo" />
                    <h2 className="  text-2xl font-semibold text-sky-400">Employ<span className=" text-blue-900">Edge</span></h2>
                </div>
                <ul className=" space-y-3 px-10 py-5  border-b-2">
                    {menuItems}
                </ul>
                <p onClick={ ()=>setMenu(false)} className=" absolute top-5 right-4"><ImCross /></p>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;
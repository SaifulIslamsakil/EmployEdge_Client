
import { IoMdNotifications } from "react-icons/io";
import Logo from "../../assets/logo (2).png"
import { LuMenu } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
const DashNavbar = ({setDasSiderbarToggel, dasSidebarToggel}) => {

    const {user} = useContext(AuthContext)
    return (
        <nav className="bg-white p-5 w-full flex justify-between items-center">
            <div >
                <span onClick={()=> setDasSiderbarToggel(!dasSidebarToggel)} className=" z-50  top-8 left-4 text-3xl absolute lg:static"><LuMenu /></span>
            </div>
            <div className=" flex items-center gap-5 ">
                <p className="text-2xl " ><IoMdNotifications /></p>
                <p className=" flex items-center gap-2 text-xl bg-slate-100 p-2 rounded-lg">{user?.displayName}<span className=" text-2xl"><img className=" w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></span></p>
            </div>
        </nav>
    );
};

export default DashNavbar;
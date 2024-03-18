
import { IoMdNotifications } from "react-icons/io";
import Logo from "../../assets/logo (2).png"
import { LuMenu } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
const DashNavbar = ({setDasSiderbarToggel, dasSidebarToggel}) => {
    return (
        <nav className="bg-white p-5 w-full flex justify-between items-center">
            <div>
                <span onClick={()=> setDasSiderbarToggel(!dasSidebarToggel)} className=" text-2xl"><LuMenu /></span>
            </div>
            <div className=" flex items-center gap-5 ">
                <p className=" text-2xl"><IoMdNotifications /></p>
                <p className=" flex items-center gap-2 text-xl bg-slate-100 p-2 rounded-lg">Saiful Islam<span className=" text-2xl"><FaUserCircle /></span></p>
            </div>
        </nav>
    );
};

export default DashNavbar;
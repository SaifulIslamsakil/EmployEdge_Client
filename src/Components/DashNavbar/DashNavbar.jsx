import { IoMdNotifications } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const DashNavbar = ({ setDasSiderbarToggel, dasSidebarToggel }) => {
    const { user, LogoutUser } = useContext(AuthContext)
    const Navigate = useNavigate()
    const handelLogout = () => {
        LogoutUser()
            .then(res => {
                if (res) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your Account succefully logOut!",
                        icon: "success"
                    });
                    Navigate("/")
                }
            })
            .catch(err => {
                if (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            })
    }
    return (
        <nav className="bg-white p-5 w-full flex justify-between items-center">
            <div >
                <span onClick={() => setDasSiderbarToggel(!dasSidebarToggel)} className=" z-50  top-8 left-4 text-3xl absolute lg:static"><LuMenu /></span>
            </div>
            <div className=" flex items-center gap-5 ">
                <p className="text-2xl " ><IoMdNotifications /></p>
                <p className=" flex items-center gap-2 text-xl bg-slate-100 p-2 rounded-lg">{user?.displayName}<span className=" text-2xl"><img className=" w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></span></p>
                <p onClick={handelLogout} className="text-white bg-blue-800 rounded-lg p-3 hover:bg-blue-600  " >logout </p>
            </div>
        </nav>
    );
};

export default DashNavbar;
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Socal = () => {
    return (
        <div className=" flex items-center justify-center gap-5 p-5">
            <p className=" bg-blue-800 text-white p-1 w-12 h-12 flex items-center justify-center rounded-full text-2xl hover:bg-blue-600"><FaGoogle /></p>
            <p className=" bg-blue-800 text-white p-1 w-12 h-12 flex items-center justify-center rounded-full text-2xl hover:bg-blue-600"><FaFacebook /></p>
            <p className=" bg-blue-800 text-white p-1 w-12 h-12 flex items-center justify-center rounded-full text-2xl hover:bg-blue-600"><FaGithub /></p>
        </div>
    );
};

export default Socal;
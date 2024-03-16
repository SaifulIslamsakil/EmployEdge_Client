import { GoDotFill } from "react-icons/go";

const Welcome = () => {
    return (
        <div className=" lg:flex justify-between items-center gap-10 p-10 bg-gradient-to-r from-blue-50  to-sky-50  ">
            <div className=" flex-1 space-y-5">
                <h6 className="  flex items-center gap-5 font-semibold "> <span className=" shadow-lg shadow-blue-400"><GoDotFill /></span>__WELCOME TO OUR COMPANY__ </h6>
                <h1 className=" text-5xl font-semibold text-blue-800  w-11/12">We Are Increasing Business Success With Technology</h1>
                <p>An IT solution service company may serve clients from various industries such as healthcare, finance, education, and manufacturing. They may work on a project basis, providing services for a specific project or on a long-term basis...Amazing communication.Best trending designing experienceEmail & Live chat.
                </p>
                <button className=" bg-blue-500 text-white py-3 px-5 rounded-full">Discover More</button>
            </div>
            <div className=" flex-1 relative">
                <img className=" md:w-3/4 mx-auto " src="https://i.ibb.co/4ZnSJPy/group28.png" alt="" />
                <img className=" absolute bottom-6 w-32 md:w-60 border p-2 bg-white rounded-lg " src="https://i.ibb.co/jydYJfZ/about-image-1-1.png" alt="" />
            </div>

        </div>
    );
};

export default Welcome;
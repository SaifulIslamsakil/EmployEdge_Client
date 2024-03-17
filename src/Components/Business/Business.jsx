import { GoDotFill } from "react-icons/go";

const Business = () => {
    return (
        <div className=" lg:flex justify-between items-center gap-10 p-10 space-y-10 ">
        <div className=" flex-1 space-y-9">
            <h6 className="  flex items-center gap-5 font-semibold "> <span className=" shadow-lg shadow-blue-400"><GoDotFill /></span>__WELCOME TO OUR COMPANY__ </h6>
            <h1 className=" text-5xl font-semibold text-blue-800  w-11/12">We Make Awesome IT Services For Your Newly Business</h1>
            <button className=" bg-blue-700 text-white py-4 px-9 rounded-full hover:bg-sky-600">Start A Projects</button>
        </div>
        <div className=" flex-1 ">
            <img className="  mx-auto " src="https://i.ibb.co/NFLxg0w/img-2.png" alt="" />
           
        </div>

    </div>
    );
};

export default Business;
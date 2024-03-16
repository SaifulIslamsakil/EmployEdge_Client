import { GoDotFill } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { LuComputer } from "react-icons/lu";
const Services = () => {
    return (
        <div className=" p-5 space-y-10  ">
            <div className=" text-center space-y-7">
                <h6 className=" text-2xl flex items-center justify-center gap-1 md:gap-5 font-semibold "> <span className=" shadow-lg shadow-blue-400"><GoDotFill /></span>__OUR SERVICES__ <span className=" shadow-lg shadow-blue-400"><GoDotFill /></span></h6>
                <div className=" space-y-3">
                    <h1 className=" text-4xl font-bold">Service We Provide</h1>
                    <p>Lorem ipsum dolor,  sit amet consectetur <br />  adipisicing elit. Sit ullam optio necessitatibus a aperiam, eos, dolores et quod,</p>
                </div>
            </div>
            <div className=" grid  md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className=" border-2 p-10 space-y-8 hover:shadow-xl">
                    <div>
                        <p className=" bg-sky-100  text-sky-400 w-20 h-20 flex items-center justify-center text-3xl"><FaRegLightbulb /></p>
                    </div>
                    <div className=" space-y-5">
                        <h2 className=" text-2xl font-bold">Technology Solution</h2>
                        <p className=" text-xl ">Developing a comprehensive IT strategy that aligns.</p>
                        <p className=" text-3xl text-sky-400"><MdArrowOutward /></p>
                    </div>
                </div>
                <div className=" border-2 p-10 space-y-8 hover:shadow-xl">
                    <div>
                        <p className=" bg-sky-100  text-sky-400 w-20 h-20 flex items-center justify-center text-3xl"><LuComputer /></p>
                    </div>
                    <div className=" space-y-5">
                        <h2 className=" text-2xl font-bold">IT Management Service</h2>
                        <p className=" text-xl ">Developing a comprehensive IT strategy that aligns.</p>
                        <p className=" text-3xl text-sky-400"><MdArrowOutward /></p>
                    </div>
                </div>
                <div className=" border-2 p-10 space-y-8 hover:shadow-xl">
                    <div>
                        <p className=" bg-sky-100  text-sky-400 w-20 h-20 flex items-center justify-center text-3xl"><CgWebsite /></p>
                    </div>
                    <div className=" space-y-5">
                        <h2 className=" text-2xl font-bold">Website & Mobile App Design</h2>
                        <p className=" text-xl ">Developing a comprehensive IT strategy that aligns.</p>
                        <p className=" text-3xl text-sky-400"><MdArrowOutward /></p>
                    </div>
                </div>
                <div className=" border-2 p-10 space-y-8 hover:shadow-xl">
                    <div>
                        <p className=" bg-sky-100  text-sky-400 w-20 h-20 flex items-center justify-center text-3xl"><BsDatabaseFillAdd /></p>
                    </div>
                    <div className=" space-y-5">
                        <h2 className=" text-2xl font-bold">Data Tracking Security</h2>
                        <p className=" text-xl ">Developing a comprehensive IT strategy that aligns.</p>
                        <p className=" text-3xl text-sky-400"><MdArrowOutward /></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
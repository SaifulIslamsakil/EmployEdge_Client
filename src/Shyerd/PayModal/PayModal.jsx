import { useForm } from "react-hook-form";

import { ImCross } from "react-icons/im";
const PayModal = ({ name, selary, openModal, setOpenModal }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <div className={`absolute top-0 left-0 z-50  w-full h-full ${openModal ? "block" : "hidden"}`}>
            <div className=" w-full h-full flex items-center justify-center   bg-black bg-opacity-10">
                <div className=" bg-white rounded-lg p-10 shadow-2xl border-t-4 border-blue-600  space-y-5 relative" >
                    <h1 className=" text-center font-semibold text-2xl text-blue-800"> Employee Selary Pay </h1>
                    <p className=" font-semibold text-xl text-center"> Employee Name :Saiful islam <span className="text-blue-500">{name}</span></p>

                    <span  onClick={()=>setOpenModal(false)} className=" text-lg absolute top-0 right-3"><ImCross /></span>

                    <form className=" space-y-3" action="">
                        <div className=" space-y-1">
                            <label>
                                <p className="font-semibold">Salary</p>
                            </label>
                            <input type="number" {...register("salary")} placeholder="Enter salary...." className="w-full p-2 outline-none border border-blue-500" defaultValue={selary} readOnly />
                        </div>
                        <div className=" flex gap-5">

                            <div className=" space-y-1">
                                <label>
                                    <p className="font-semibold">Month</p>
                                </label>
                                <select {...register("month")} className="border border-blue-500 p-2" required>
                                    <option disabled selected>Select one</option>
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value=" Dec">Dec</option>
                                </select>
                            </div>
                            <div className=" space-y-1">
                                <label>
                                    <p className="font-semibold">Year</p>
                                </label>
                                <select {...register("Year")} className="border border-blue-500 p-2" required>
                                    <option disabled selected>Select one</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>

                                </select>
                            </div>
                        </div>

                        <div className="w-full mx-auto  ">
                            <button className="w-full mt-4 bg-blue-800 hover:bg-blue-600 text-white text-center py-3 rounded-lg">Pay Now</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PayModal;
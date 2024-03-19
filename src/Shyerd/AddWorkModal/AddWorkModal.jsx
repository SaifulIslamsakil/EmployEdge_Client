import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../../Provider/Provider";
import useAxiosPulic from "../../Hooks/useAxiosPulic/useAxiosPulic";


const AddWorkModal = ({ openModal, setOpenModal }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const AxiosPublic = useAxiosPulic()
    const { user } = useContext(AuthContext)


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const submitTask = (data) => {
        // const workInfo = {
        //     email:user?.email,
        //     name:user?.displayName,
        //     Hours:data?.Worked,
        //     task:data?.tasks,
        //     date:"12/03/2024"
        // }
        // AxiosPublic.post("/addWork", workInfo)
        // .then(res=>{
        //     console.log(res.data)
        // })
        console.log(data)

    }
    return (
        <div className={`absolute top-0 left-0 z-50  w-full h-full ${openModal ? "block" : "hidden"} `}>
            <div className=" w-full h-screen flex items-center justify-center   bg-black bg-opacity-10">
                <div className=" bg-white rounded-lg p-10 shadow-2xl border-t-4 border-blue-600  space-y-5 relative" >
                    <h1 className=" text-center font-semibold text-2xl text-blue-800"> Employee Selary Pay </h1>
                    <p className=" font-semibold text-xl text-center"> Employee Name :Saiful islam <span className="text-blue-500">{"name"}</span></p>

                    <span onClick={() => setOpenModal(false)} className=" text-lg absolute top-0 right-3"><ImCross /></span>

                    <form onClick={handleSubmit(submitTask)} action="">
                        <input {...register("user",)} type="text" name="" id="" />
                        <button>sss</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddWorkModal;
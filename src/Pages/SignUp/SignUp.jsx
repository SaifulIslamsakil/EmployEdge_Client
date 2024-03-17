import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Socal from "../../Shyerd/Socal/Socal"
import Logo from "../../assets/logo (2).png"

const SignUp = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const datas = (data) => {
        console.log(data)
    }
    return (
        <div className=" flex justify-between items-center gap-5 ">
            <div className=" hidden md:flex flex-1 justify-center items-center">
                <div>
                    <div className=" flex items-center justify-center">
                        <img className=" w-28 " src={Logo} alt="Logo" />
                        <h2 className=" hidden md:block text-3xl font-semibold text-sky-400">Employ<span className=" text-blue-900">Edge</span></h2>
                    </div>
                    <img className=" w-3/4 mx-auto" src="https://i.ibb.co/gjCpJ0w/isometric-style-illustration-analysis-content-insight-seo-529804-682.jpg" alt="" />
                </div>

            </div>
            <div className=" flex-1 h-full bg-slate-100 p-10 space-y-5 ">
                <h2 className=" text-2xl font-semibold text-center text-blue-800">Welcome to Kuber EmployEdge</h2>
                <p className=" text-center text-lg">All Rady Have an Account? <Link className=" text-blue-500 hover:underline">Sign in</Link></p>
                <form onClick={handleSubmit(datas)} className=' space-y-5' action="">
                    <div className=' md:w-3/4 mx-auto space-y-1'>
                        <p className=' font-semibold text-lg'>Name:</p>
                        <input className=' w-full p-3 border-2 border-blue-600 outline-none' placeholder='Enter Name....' {...register("name", { required: true })} type="text" />
                    </div>
                    <div className=' md:w-3/4 mx-auto space-y-1'>
                        <p className=' font-semibold text-lg'>Email:</p>
                        <input className=' w-full p-3 border-2 border-blue-600 outline-none' placeholder='Enter Email....' {...register("email", { required: true })} type="text" />
                    </div>
                    <div className=' md:w-3/4 mx-auto space-y-1'>
                        <p className=' font-semibold text-lg'>Password:</p>
                        <input className=' w-full p-3 border-2 border-blue-600 outline-none' placeholder='Enter Password....' {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="password" />
                        {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                        {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                        {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                    </div>
                    <div className=' md:w-3/4 mx-auto space-y-1'>
                        <button className=' w-full py-4 bg-blue-800 hover:bg-blue-600 text-white rounded-lg' >Register</button>
                    </div>
                </form>
                <Socal></Socal>
            </div>
        </div>
    );
};

export default SignUp;
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Socal from "../../Shyerd/Socal/Socal"
import Logo from "../../assets/logo (2).png"
import { useContext } from 'react';
import { AuthContext } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import Auth from '../../Firbase/Firbase';
import useAxiosPulic from '../../Hooks/useAxiosPulic/useAxiosPulic';

const Imgbb_key = "8e63e023b6716f56295b0c1df1b0048a"
const createImgbbUrl = `https://api.imgbb.com/1/upload?key=${Imgbb_key}`

const SignUp = () => {
    const Navigate = useNavigate()
    const { RegisterUser } = useContext(AuthContext)
    const AxiosPublic = useAxiosPulic()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const datas = async (data) => {
        console.log(data)
        const imgFile = { image: data.photo[0] }
        const PhotoUrl = await AxiosPublic.post(createImgbbUrl, imgFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        console.log(PhotoUrl)
        RegisterUser(data?.email, data?.password)
            .then(res => {
                updateProfile(Auth.currentUser,{
                    displayName:data.name,
                    photoURL:PhotoUrl?.data?.data?.url
                })
                const userInfo = {
                    name:data?.name,
                    email:data?.email,
                    bank_account_no:data?.bank_account_no,
                    Photo:PhotoUrl?.data?.data?.url,
                    selary:data?.salary,
                    role:data?.role
                }

                AxiosPublic.post("/user", userInfo)
                .then(res=>{
                    if(res?.acknowledged){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                    Navigate("/Dashbords")
                })
            })
            .catch(err => {
                if (err) {
                    alert("err")
                }
            })

    }
    return (
        <div className=" flex justify-between items-center gap-5  ">
            <div className=" hidden md:flex flex-1 justify-center items-center">
                <div>
                    <div className=" flex items-center justify-center">
                        <img className=" w-28 " src={Logo} alt="Logo" />
                        <h2 className=" hidden md:block text-3xl font-semibold text-sky-400">Employ<span className=" text-blue-900">Edge</span></h2>
                    </div>
                    <img className=" w-3/4 mx-auto" src="https://i.ibb.co/gjCpJ0w/isometric-style-illustration-analysis-content-insight-seo-529804-682.jpg" alt="" />
                </div>

            </div>
            <div className=" flex-1 h-full bg-slate-100 p-5  ">
                <h2 className=" text-2xl font-semibold text-center text-blue-800">Welcome to Kuber EmployEdge</h2>
                <p className=" text-center text-lg">All Rady Have an Account? <Link to="/login" className=" text-blue-500 hover:underline">Sign up</Link></p>
                <form onSubmit={handleSubmit(datas)} className="w-3/4 mx-auto space-y-3">
                    <div className="w-full mx-auto space-y-1">
                        <label>
                            <p className="font-semibold">Name</p>
                        </label>
                        <input type="text" {...register("name")} placeholder="Enter Name...." className="w-full p-2 outline-none border border-blue-500" required />
                    </div>
                    <div className="w-full mx-auto space-y-1">
                        <label>
                            <p className="font-semibold">Email</p>
                        </label>
                        <input type="email" {...register("email")} placeholder="Enter email...." className="w-full p-2 outline-none border border-blue-500" required />
                    </div>
                    <div className="w-full mx-auto space-y-1">
                        <label>
                            <p className="font-semibold">Bank account no</p>
                        </label>
                        <input type="number" {...register("bank_account_no")} placeholder="Enter Bank account no...." className="w-full p-2 outline-none border border-blue-500" required />
                    </div>
                    <div className="w-full mx-auto space-y-1">
                        <label>
                            <p className="font-semibold">Photo</p>
                        </label>
                        <input type="file" {...register("photo")} className="w-full p-2 outline-none border border-blue-500" />
                    </div>
                    <div className='w-full mx-auto md:flex gap-5'>
                        <div className=" space-y-1">
                            <label>
                                <p className="font-semibold">Salary</p>
                            </label>
                            <input type="number" {...register("salary")} placeholder="Enter salary...." className="w-full p-2 outline-none border border-blue-500" required />
                        </div>
                        <div className=" space-y-1">
                            <label>
                                <p className="font-semibold">Role</p>
                            </label>
                            <select {...register("role")} className="border border-blue-500 p-2">
                                <option disabled selected>Select one</option>
                                <option value="Admin">Admin</option>
                                <option value="HR">HR</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full mx-auto space-y-1">
                        <label>egital
                            <p className="font-semibold">Designation</p>
                        </label>
                        <textarea placeholder='Enter your messages...' className=' w-full p-2' name="" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="w-full mx-auto space-y-1">
                        <label>
                            <p className="font-semibold">Password</p>
                        </label>
                        <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 8, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} placeholder="Enter Password...." className="w-full p-2 outline-none border border-blue-500" required />
                        {errors.password?.type === "required" && <span className=" text-red-500">password is required</span>}
                        {errors.password?.type === "minLength" && <span className=" text-red-500">your Password must be 6 chareter</span>}
                        {errors.password?.type === "pattern" && <span className=" text-red-500">your Password must be an number an uppercase an lowercase an spcial careater</span>}
                    </div>
                    <div className="w-full mx-auto ">
                        <button className="w-full bg-blue-800 hover:bg-blue-600 text-white text-center py-3 rounded-lg">Register</button>
                    </div>
                </form>
                <Socal></Socal>
            </div>
        </div>
    );
};

export default SignUp;
import { Avatar, Badge, Button, Table } from "keep-react";
import { ArrowsDownUp, Cube, DotsThreeOutline } from "phosphor-react";
import { MdVerified } from "react-icons/md";
import { GoUnverified } from "react-icons/go";
import useAxiosPulic from "../../Hooks/useAxiosPulic/useAxiosPulic";
import { useQuery } from "@tanstack/react-query";

const employeelist = () => {
    const AxiosPublic = useAxiosPulic()
    const { data: EmployeeList = [] } = useQuery({
        queryKey: ['all-class'],
        queryFn: async () => {
            const res = await AxiosPublic.get("/EmployeeList")
            return res.data
        }
    })

    const Verified = (id)=>{
        AxiosPublic.put(`verified/${id}`)
        .then(res=>{
            if(res?.data.modifiedCount ==1){
                alert("ss")
            }
        })
    }
    return (
        <div className=" p-5 space-y-5 ">
            <h1 className=" text-2xl font-semibold text-blue-800">Employeelist</h1>
            <div className=" overflow-hidden">
                <Table className="w-full" showCheckbox={true}>
                    <Table.Caption>
                        <div className="my-5 flex items-center justify-between px-6">
                            <div className="flex items-center gap-5">
                                <p className="text-body-1 font-semibold text-metal-600">Cash Out Transactions</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <Button variant="outline" size="sm">
                                    <span className="pr-2">
                                        <Cube size={2} />
                                    </span>
                                    New member
                                </Button>
                                <Button variant="outline" size="sm">
                                    <span className="pr-2">
                                        <Cube size={24} />
                                    </span>
                                    Search
                                </Button>
                            </div>
                        </div>
                    </Table.Caption>
                    <Table.Head>
                        <Table.HeadCell >
                            <p className="text-body-5 font-medium text-metal-400">Name</p>
                        </Table.HeadCell>
                        <Table.HeadCell icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Email
                        </Table.HeadCell>
                        <Table.HeadCell icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Salary
                        </Table.HeadCell>
                        <Table.HeadCell icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Verified
                        </Table.HeadCell>
                        <Table.HeadCell icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Bank Account
                        </Table.HeadCell>
                        <Table.HeadCell icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Action
                        </Table.HeadCell>
                        <Table.HeadCell />
                    </Table.Head>
                    <Table.Body className="divide-gray-25 divide-y">
                        {
                            EmployeeList.map(Employee => <Table.Row key={Employee?._id} className="bg-white">
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <Avatar img={Employee.Photo} />
                                                <div>
                                                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{Employee?.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{Employee?.email}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{Employee?.selary}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="inline-block">
                                        {
                                            Employee?.Verified ? <span  className=" text-2xl text-green-500"><MdVerified /></span>
                                            :<span onClick={()=>Verified(Employee?._id)} className=" text-2xl text-red-500"><GoUnverified /></span>
                                        }
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{Employee?.bank_account_no}</p>
                                </Table.Cell>
                                <Table.Cell className=" flex gap-2 items-center">
                                    <Button color="primary" variant="outline">
                                        Pay
                                    </Button>
                                    <Button color="secondary" variant="outline">
                                        Details
                                    </Button>
                                </Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default employeelist;
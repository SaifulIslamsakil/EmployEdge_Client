import { Avatar, Badge, Button, Table } from "keep-react";
import { ArrowsDownUp, Cube } from "phosphor-react";
import { Link } from "react-router-dom";
import useAxiosPulic from "../../Hooks/useAxiosPulic/useAxiosPulic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const AllEmployeeList = () => {
    const AxiosPublic = useAxiosPulic()

    const { data: AllEmployeeList = [], refetch } = useQuery({
        queryKey: ['AllEmployeeList'],
        queryFn: async () => {
            const res = await AxiosPublic.get("/allEmployeeList")
            return res.data
        }
    })

    const FireHr = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fired it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.put(`/firehr/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                              Swal.fire({
                                title: "Role Change!",
                                text: "HR has been Fired.",
                                icon: "success"
                              });
                        }
                        refetch()
                    })

            }
        });

    }
    const MakeHr = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, MakeHr it!"
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosPublic.put(`/MakeHr/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                              Swal.fire({
                                title: "Role Change!",
                                text: "HR has been added.",
                                icon: "success"
                              });
                        }
                        refetch()
                    })

            }
        });

    }
    return (
        <div className=" p-5 space-y-5 relative ">
            <h1 className=" text-2xl font-semibold text-blue-800">All Employee list</h1>
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
                            Designation
                        </Table.HeadCell>
                        <Table.HeadCell icon={<ArrowsDownUp size={14} color="#8897AE" />}>
                            Action
                        </Table.HeadCell>
                        <Table.HeadCell />
                    </Table.Head>
                    <Table.Body className="divide-gray-25 divide-y">

                        {
                            AllEmployeeList.map(employee => <Table.Row key={employee?._id} className="bg-white">
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <Avatar img={employee.Photo} />
                                                <div>
                                                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{employee?.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{employee?.email}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="inline-block">
                                        <Badge color="success">{employee?.role}</Badge>
                                    </div>
                                </Table.Cell>


                                <Table.Cell className=" flex gap-2 items-center">
                                    <Button onClick={()=> MakeHr(employee?._id)} disabled={employee.role =="Admin" ||employee?.role === "HR"} color="primary" variant="outline">
                                        HR
                                    </Button>
                                    <Button onClick={() => FireHr(employee?._id)} color="secondary" disabled={employee.role =="Admin" ||employee.role == "Employee"} variant="outline">
                                        Fire
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

export default AllEmployeeList;

import { Avatar, Badge, Button, Table } from "keep-react";
import { ArrowsDownUp, Cube } from "phosphor-react";
import AddWorkModal from "../../Shyerd/AddWorkModal/AddWorkModal";
import { useState } from "react";

const WorkSheet = () => {
    const [openModal, setOpenModal]= useState(false)
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
                                <Button onClick={()=> setOpenModal(true)} variant="outline" size="sm">
                                    <span className="pr-2">
                                        <Cube size={2} />
                                    </span>
                                    Add Work
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

                        
                             <Table.Row key={"employee?._id"} className="bg-white">
                                <Table.Cell>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <Avatar img={"employee.Photo"} />
                                                <div>
                                                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{"employee?.name"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <p className="text-body-5 font-medium text-metal-500">{"employee?.email"}</p>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="inline-block">
                                        <Badge color="success">{"employee?.role"}</Badge>
                                    </div>
                                </Table.Cell>


                                <Table.Cell className=" flex gap-2 items-center">
                                    <Button  variant="outline">
                                        HR
                                    </Button>
                                    <Button variant="outline">
                                        Fire
                                    </Button>
                                </Table.Cell>

                            </Table.Row>
                        

                    </Table.Body>
                </Table>
            </div>
           <AddWorkModal
           openModal={openModal}
           setOpenModal={setOpenModal}
           ></AddWorkModal>
        </div>
    );
};

export default WorkSheet;
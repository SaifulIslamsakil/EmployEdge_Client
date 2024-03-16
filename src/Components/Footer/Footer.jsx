
const Footer = () => {
    return (
        <footer className=" bg-gradient-to-r from-sky-100 to-blue-100 h-auto lg:h-screen    pt-20">
            <div className=" grid  md:grid-cols-2 lg:grid-cols-5  gap-5 h-full">
                <div className=" lg:col-span-2 h-full relative space-y-7" >
                    <div className=" px-5 lg:pl-10 space-y-10">
                        <p className="font-bold text-3xl text-sky-500">Employ<span className=" text-blue-900 ">Edge</span></p>
                        <p className=" font-semibold text-xl">Subscribe to our newsletter</p>
                        <div className="  md:w-80 shadow-xl bg-white h-14 z-30 flex items-center p-3 gap-3 rounded-lg">
                            <input className=" h-full w-full border-0 outline-none" type="text" name="" id="" placeholder="Email " />
                            <button className=" btn btn-primary">Send</button>
                        </div>
                    </div>
                    <img className=" absolute top-48 z-10 w-52 hidden lg:block" src="https://i.ibb.co/7tV1YJB/man.png" alt="" />
                    <img className=" absolute top-72 z-10 left-52 " src="https://i.ibb.co/bKvLc1S/email-icon-two.png" alt="" />
                    <img className=" absolute top-52 w-14 z-10 left-28 lg:left-10 " src="https://i.ibb.co/bKvLc1S/email-icon-two.png" alt="" />
                    <img className=" absolute top-20 w-14 z-10 left-28 " src="https://i.ibb.co/nMp2fMg/cloud.png" alt="" />
                </div>
                <div className=" grid-cols-1 space-y-4 p-5 ">
                    <p className=" text-lg font-bold">Company</p>
                    <p className=" text-lg hover:text-sky-500">About Us</p>
                    <p className=" text-lg hover:text-sky-500">Testimonials</p>
                    <p className=" text-lg hover:text-sky-500">Affiliates</p>
                    <p className=" text-lg hover:text-sky-500">Partners</p>
                    <p className=" text-lg hover:text-sky-500">Careers</p>
                    <p className=" text-lg hover:text-sky-500">TopicTrove for Good</p>
                    <p className=" text-lg hover:text-sky-500">Contact Us</p>

                </div>
                <div className=" grid-cols-1 space-y-4 p-5 ">
                    <p className=" text-lg font-bold">Support</p>
                    <p className=" text-lg hover:text-sky-500">Help Desk</p>
                    <p className=" text-lg hover:text-sky-500">Knowledge Base</p>
                    <p className=" text-lg hover:text-sky-500">Live Chat</p>
                    <p className=" text-lg hover:text-sky-500">Integrations</p>
                    <p className=" text-lg hover:text-sky-500">Reports</p>
                    <p className=" text-lg hover:text-sky-500">iOS & Android</p>
                    <p className=" text-lg hover:text-sky-500">Messages</p>

                </div>
                <div className=" grid-cols-1 space-y-4 p-5 ">
                    <p className=" text-lg font-bold">Doc Pages</p>
                    <p className=" text-lg hover:text-sky-500">Doc Topic</p>
                    <p className=" text-lg hover:text-sky-500">Free Training</p>
                    <p className=" text-lg hover:text-sky-500">Doc Archive</p>
                    <p className=" text-lg hover:text-sky-500">Changelog</p>
                    <p className=" text-lg hover:text-sky-500">Onepage Docs</p>
                    <p className=" text-lg hover:text-sky-500">Conversion Tracking</p>
                    <p className=" text-lg hover:text-sky-500">Cheatseet</p>

                </div>
            </div>
            <div className=" p-10 text-center bg-gradient-to-r from-sky-100 to-blue-100 border border-white relative ">
                <p >© 2024 All Rights Reserved by <span className=" text-sky-500">Employ</span> <span className=" text-blue-900 ">Edge</span></p>
                <img className=" absolute -top-32 right-5 z-10 hidden md:block" src="https://i.ibb.co/cDR78VV/f-man.png" alt="" />
                <img className=" absolute -top-[75px] right-14 w-48 z-10 hidden md:block" src="https://html-template.spider-themes.net/kbdoc/kbdoc-html/img/v.svg" alt="" />
            </div>
        </footer>
    );
};

export default Footer;
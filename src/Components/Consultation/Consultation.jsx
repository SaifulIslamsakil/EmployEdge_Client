const Consultation = () => {
    return (
        <div className="  h-80 object-cover w-full" style={{ backgroundImage: "url(https://i.ibb.co/VYypm3F/background-02-1920x870.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className=" bg-gray-900 bg-opacity-80 w-full h-full text-white flex justify-around items-center gap-10">
                <div className=" space-y-5">
                    <p>WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7</p>
                    <h4 className=" text-4xl font-bold">Need A Consultation?</h4>
                </div>
                <button className=" py-4 px-5 rounded-full bg-blue-700 font-semibold hover:bg-sky-600 ">Let’s Get Started</button>
            </div>
        </div>
    );
};

export default Consultation;
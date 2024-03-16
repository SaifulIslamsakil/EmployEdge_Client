import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Welcome from "../../Components/Welcome/Welcome";

const Home = () => {

    return (
        <div className=" space-y-10">
            <Banner></Banner>
            <Services></Services>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;
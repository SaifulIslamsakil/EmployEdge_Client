import Banner from "../../Components/Banner/Banner";
import Business from "../../Components/Business/Business";
import Consultation from "../../Components/Consultation/Consultation";
import Reviw from "../../Components/Reviw/Reviw";
import Services from "../../Components/Services/Services";
import Welcome from "../../Components/Welcome/Welcome";

const Home = () => {

    return (
        <div className=" space-y-20">
            <Banner></Banner>
            <Services></Services>
            <Welcome></Welcome>
            <Consultation></Consultation>
            <Business></Business>
            <Reviw></Reviw>
        </div>
    );
};

export default Home;
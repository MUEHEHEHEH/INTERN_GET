import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import HomeContent4 from "../Components/elements/Content/Home/HomeContent4";
import HomeContent3 from "../Components/elements/Content/Home/HomeContent3";
import HomeContent2 from "../Components/elements/Content/Home/HomeContent2";
import HomeContent1 from "../Components/elements/Content/Home/HomeContent1";
import { Fade } from "react-reveal";

const Home = () => {
    return(
        <Fade>
            <BackGround>
                <>
                    <Navbar/>
                    <HomeContent1/>
                    <HomeContent2/>
                    <HomeContent3/>
                    <HomeContent4/>    
                    <Footer/>
                </>
            </BackGround>

        </Fade>
        
    );
};

export default Home;
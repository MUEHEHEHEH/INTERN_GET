import BackGround from "../Components/layouts/BG";
import Navbar from "../Components/fragments/Navbar";
import Footer from "../Components/fragments/Footer";
import HomeContent4 from "../Components/elements/Content/HomeContent4";
import HomeContent3 from "../Components/elements/Content/HomeContent3";
import HomeContent2 from "../Components/elements/Content/HomeContent2";
import HomeContent1 from "../Components/elements/Content/HomeContent1";

const Home = () => {
    return(
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
        
    );
};

export default Home;
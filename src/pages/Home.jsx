import "../cssfolder/Home.css";
import Productos from "../components/Productos";
import logocamus from "../icons/logocamus.webp";

const Home = () => {

    return (
        <div className='Home'>

            <div class="Home-hero">
                <div class="slider-container">

                    <img src={logocamus} alt="" />

                </div>
            </div>

            <Productos />

            {/* <div className="Home banner section-m1">
            </div> */}

            <div className="sm-banner">

                <div className="sm-banner banner-box"></div>


                <div className="sm-banner banner-box2"></div>

            </div>

        </div>
    )
}

export default Home

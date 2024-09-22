import "../cssfolder/Home.css";
import Productos from "../components/Productos";
import logokamus from "../icons/logokamus.webp";

const Home = () => {

    return (
        <div className='Home'>

            <div class="Home-hero">
                <div class="slider-container">

                    <img src={logokamus} alt="" />

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

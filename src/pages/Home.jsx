import "../cssfolder/Home.css";
import Productos from "../components/Productos";
import logocamus from "../icons/logocamus.webp";
import Fade from 'react-reveal/Fade';

const Home = () => {

    return (
        <div className='Home'>

            <div class="Home-hero">
                <div class="slider-container">
                    <Fade bottom>
                        <img src={logocamus} alt="" />
                    </Fade>
                </div>
            </div>

            <Productos />

            {/* <div className="Home banner section-m1">
            </div> */}

            <div className="sm-banner">
                <Fade left>
                    <div className="sm-banner banner-box"></div>
                </Fade>
                <Fade right>
                    <div className="sm-banner banner-box2"></div>
                </Fade>
            </div>

        </div>
    )
}

export default Home

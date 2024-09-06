import "../cssfolder/Home.css";
import Productos from "../components/Productos";
import SliderContain from "../components/SliderContain";

const Home = () => {

    return (
        <div className='Home'>

            <div class="Home-hero">
                <div class="slider-container">
                    <SliderContain />
                </div>

                <div class="cta-container">
                    <SliderContain />

                    {/* <h2>Sign In for the Best Experience</h2>
                    <ul>
                        <li>Collect points & earn rewards</li>
                        <li>Get personalized recommendations</li>
                        <li>Checkout faster and more easily</li>
                    </ul> */}

                </div>
            </div>

            <Productos />

            <div className="Home banner section-m1">
            </div>

            <div className="Home sm-banner section-p1">
                <div className="banner-box">
                    {/* <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at cara</span> */}
                    <button className="white">Learn More</button>
                </div>

                <div className="banner-box banner-box2">
                    {/* <h4>spring/summer</h4>
                    <h2>upcomming season</h2>
                    <span>The best classic dress is on sale at cara</span> */}
                    <button className="white">Learn More</button>
                </div>
            </div>

            <div className="Home banner3">
                <div className="banner-box">
                    {/* <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3> */}
                </div>

                <div className="banner-box banner-box2">
                    {/* <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2022</h3> */}
                </div>

                <div className="banner-box  banner-box3">
                    {/* <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3> */}
                </div>
            </div>
        </div>
    )
}

export default Home

import "../cssfolder/Home.css";
import ButtonCategories from "../components/ButtonCategories";
import ProductosHome from "../components/ProductosHome";

const Home = () => {

    // const { arabe, nicho, diseñador } = products

    return (
        <div className='Home'>
            <div className="Home hero">
                <div className="Hero-images"> </div>
                <div className="Hero-info">
                    <h4>Trade-in-offer</h4>
                    <h2>Perfumería 100% original</h2>
                    <h1>On all products</h1>
                    <p>Envíos gratis a todo el país</p>
                </div>
            </div>

            <ButtonCategories />

            <ProductosHome />

            <div className="Home banner section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
                <button class="normal">Explore More</button>
            </div>

            <div className="Home sm-banner section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Learn More</button>
                </div>

                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcomming season</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Learn More</button>
                </div>
            </div>

            <div className="Home banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>

                <div className="banner-box banner-box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2022</h3>
                </div>

                <div className="banner-box  banner-box3">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </div>



            {/* <div class="Home footer section-p1">
                <div class="col">

                    <h4>Contact</h4>
                    <p><strong>Address: </strong> 562 Wellington Roat, Street 32, San Francisco</p>
                    <p><strong>Phone: </strong> +01 2222 555 /(+91) 01 2222 4444</p>
                    <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>

                    <div class="follow">
                        <h4>Follow us</h4>
                        <div class="icon">
                            <img src="./img/facebook-square-logo-24.png" alt="" />
                            <img src="./img/instagram-alt-logo-24.png" alt="" />
                            <img src="img/twitter-logo-24.png" alt="" />
                            <img src="./img/youtube-logo-24.png" alt="" />
                        </div>
                    </div>
                </div>

                <div class="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Privacy Policy</a>
                </div>

                <div class="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>

                <div class="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div class="row">
                        <img src="./img/pay/app.jpg" alt="" />
                        <img src="./img/pay/play.jpg" alt="" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="./img/pay/pay.png" alt="" />
                </div>

            </div> */}
        </div>
    )
}

export default Home

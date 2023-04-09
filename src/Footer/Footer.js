import "./footer.scss";

export function Footer(){
    return(
        <>
        <div className="footer">
        <img src="./images/footer-pic1.png" alt="avatart-pic" class="avatar"/>

            <div className="flex-footer">

                <div class="about-us">
                    <h2>About Us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    
                    <a href="/" className="social">
                        <img src="./images/youtube.png" alt="youtube-icon" className="social youtube"/>
                    </a>
                    <a href="/" className="social">
                        <img src="./images/twitter.png" alt="twitter-icon" className="social"/>
                    </a>
                    <a href="/" className="social">
                        <img src="./images/linkedin.png" alt="linkedin-icon sml-icon" className="social"/>
                    </a>
                    <a href="/" className="social">
                        <img src="./images/instagram.png" alt="instagram-icon" className="social"/>
                    </a>
                </div>
                <div className="overview">
                    <h2>Overview</h2>
                    <a href="/">Blogs</a>
                    <a href="/">Shop</a>
                    <a href="/">Services</a>
                    <a href="/">Contact Us</a>
                </div>
                <div className="contact">
                    <h2>Contact Information</h2>
                    <a href="/"><i class="fa-solid fa-mobile-screen"></i>+91 9034468553</a>
                    <a href="/"><i class="fa-solid fa-envelope"></i>yashjindal238@gmail.com</a>
                </div>
            </div>
        </div>
        </>
    )
}
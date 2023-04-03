import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return ( <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALE</h1>
                <p>Experience audio like never before. Our noise-cancelling headphones offer crystal-clear sound and unparalleled comfort. Upgrade your listening today! </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="headphone img" srcset="" />
        </div>
    </div>);
};

export default Banner;

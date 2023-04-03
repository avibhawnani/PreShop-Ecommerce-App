import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import {AiTwotoneHeart} from "react-icons/ai";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            We are a team of tech enthusiasts who are passionate about bringing
            the latest and greatest electronic products to our customers.
            Whether you're in the market for a new smartphone, laptop, tablet,
            or any other electronic device, we have a wide selection to choose
            from.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow></FaLocationArrow>
            <div className="text">1234 Main Street Suite 567 Anytown, USA 12345</div>
          </div>
          <div className="c-item">
            <FaMobileAlt></FaMobileAlt>
            <div className="text">Phone: 9107241127</div>
          </div>
          <div className="c-item">
            <FaEnvelope></FaEnvelope>
            <div className="text">Email: preshop.in@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Projectors</span>
          <span className="text">Home Theatre</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">PreShop &copy; 2023 | CREATED WITH <AiTwotoneHeart color="red"/> IN INDIA</div>
            <img src={Payment} alt=""/>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;

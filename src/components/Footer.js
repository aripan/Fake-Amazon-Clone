import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  // Function to scroll the page upward
  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="footer">
      <div onClick={goToTop} className="footer__sectionOne">
        <ExpandLessIcon className="footer__backToTop" />
      </div>
      <div className="footer__sectionTwo">
        <div className="footer__sectionTitle">
          <h4>Get to Know Us</h4>
          <div className="footer__sectionDetails">
            <p>Careers</p>
            <p>Blog</p>
            <p>About Amazon</p>
            <p>Sustainability</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Tours</p>
          </div>
        </div>
        <div className="footer__sectionTitle">
          <h4>Make Money with Us</h4>
          <div className="footer__sectionDetails">
            <p>Sell products on Amazon</p>
            <p>Sell apps on Amazon</p>
            <p>Become an Affiliate</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
            <p> &gt; See More Make Money with Us</p>
          </div>
        </div>
        <div className="footer__sectionTitle">
          <h4>Amazon Payment Products</h4>
          <div className="footer__sectionDetails">
            <p>Amazon Business Card</p>
            <p>Shop with Points</p>
            <p>Reload Your Balance</p>
            <p>Amazon Currency Converter</p>
          </div>
        </div>

        <div className="footer__sectionTitle">
          <h4>Let Us Help You</h4>
          <div className="footer__sectionDetails">
            <p>Your Account</p>
            <p>Your Orders</p>
            <p>Shipping Rates & Policies</p>
            <p>Returns & Replacements</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Assistant</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

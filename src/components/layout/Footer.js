import React from "react";
import logo from "../../assets/img/NFters.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import linkedin from "../../assets/img/linkedin.png";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer_content">
          <div className="social">
            <img className="brand_logo" src={logo} alt="" />
            <p className="footer_paragraph">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <img className="social_logo" src={facebook} alt="" />
            <img className="social_logo" src={twitter} alt="" />
            <img className="social_logo" src={linkedin} alt="" />
          </div>
          <div className="market">
            <h1 className="footer_section_title">Market Place</h1>
            <ul>
              <li>
                <a href>All NFTs</a>
              </li>
              <li>
                <a href>New</a>
              </li>
              <li>
                <a href>Art</a>
              </li>
              <li>
                <a href>Sports</a>
              </li>
              <li>
                <a href>Utility</a>
              </li>
              <li>
                <a href>Music</a>
              </li>
              <li>
                <a href>Domain Name</a>
              </li>
            </ul>
          </div>
          <div className="account">
            <h1 className="footer_section_title">My Account</h1>
            <ul>
              <li>
                <a href>Profile</a>
              </li>
              <li>
                <a href>Favorite</a>
              </li>
              <li>
                <a href>My Collections</a>
              </li>
              <li>
                <a href>Settings</a>
              </li>
            </ul>
          </div>
          <div className="loop">
            <h1 className="footer_section_title">Stay in the loop</h1>
            <p className="footer_paragraph">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="footer_subscribe">
              <input
                type="text"
                className="footer_input"
                placeholder="Enter your email address.."
              />
              <button className="btn_subscribe">Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="linebreak" />
      <p className="footer_paragraph copywrite">Copyright © 2022 Avi Yansah</p>
    </footer>
  );
};

export default Footer;

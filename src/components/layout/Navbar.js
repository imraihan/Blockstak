import React, { useState } from "react";
import logo from "../../assets/img/NFters.png";

import { FaHamburger } from "react-icons/fa";
import { GiCrossedSabres } from "react-icons/gi";
const Navbar = () => {
  const [navcollapse, setNavCollapse] = useState(false);

  return (
    <nav id="navbar_container">
      <div className="container">
        <div className="navbar">
          <a href="/" className="brand_logo">
            <img src={logo} alt="logo" />
          </a>
          <input
            className="hamburger_search_box"
            type="text"
            placeholder="Search"
          />
          <p className="ham" onClick={() => setNavCollapse(!navcollapse)}>
            {navcollapse ? <GiCrossedSabres /> : <FaHamburger />}
          </p>
          <ul
            className="list_item"
            style={{ right: navcollapse ? "0" : "-260px" }}
          >
            <li className="marketplace">
              {" "}
              <a href=""> Marketplace </a>
            </li>
            <li className="resource">
              {" "}
              <a href="">Resource</a>{" "}
            </li>
            <li className="about">
              {" "}
              <a href="">About</a>
            </li>
            <li>
              <button className="hamburger_btn_upload">Upload</button>
            </li>
            <li>
              <button className="hamburger_btn_wallet">Connect Wallet</button>
            </li>
          </ul>
          <div className="search_btn_container">
            <input className="search_box" type="text" placeholder="Search" />
            <button className="btn_upload">Upload</button>
            <button className="btn_wallet">Connect Wallet</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

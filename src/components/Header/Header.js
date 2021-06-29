import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

///
import Logo from "../../assets/images/logo.png";
import LogoDark from "../../assets/images/logo2.png";

///
function Header() {
  ///////////////
  return (
    <div className="header row ">
      <div className="d-none d-lg-flex col-5 logoSide">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="d-flex d-lg-none col-12 logoSide">
        <Link to="/">
          <img src={LogoDark} alt="logo" />
        </Link>
      </div>
      <div className="d-none d-lg-flex col-12 col-lg-7 navSide">
        <Navbar />
      </div>
      <div className="d-flex justify-content-between d-lg-none col-12 burgerMenu">
        <h1 style={{ color: "white" }}>Menu</h1>
        <h1 style={{ color: "white" }}>Burger</h1>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
///
import Logo from "../../assets/images/logo.png";
import LogoDark from "../../assets/images/logo2.png";
import BurgerMenu from "../Navbar/BurgerMenu";

//////
function Header() {
  ///////////////
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="d-none d-lg-flex col-lg-4 logoSide">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="d-none d-lg-flex col-lg-8 navSide">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="afterCollapse">
        <div className="row">
          <div className="d-flex d-lg-none col-12 logoSideSmall">
            <Link to="/">
              <img src={LogoDark} alt="logo" />
            </Link>
          </div>
          <div className="d-lg-none col-12 burgerMenu p-0">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

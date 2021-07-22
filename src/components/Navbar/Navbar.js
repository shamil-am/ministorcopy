import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

///////////////////

function Navbar() {
  const navMouseEnter = (e) => {
    const children = e.currentTarget.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === "subMenu") {
        children[i].classList.add("active");
        return;
      }
    }
  };
  const navMouseLeave = (e) => {
    const children = e.currentTarget.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === "subMenu active") {
        children[i].classList.remove("active");
        return;
      }
    }
  };
  return (
    <>
      <ul>
        <li onMouseEnter={navMouseEnter} onMouseLeave={navMouseLeave}>
          Home
          <KeyboardArrowDownIcon />
          <div className="subMenu">
            <ul>
              <li>
                <Link to="/home-minimal">Home - Minimal</Link>
              </li>
              <li>
                <Link to="/home-freelancer">Home - Freelancer</Link>
              </li>
              <li>
                <Link to="/home-agency">Home - Agency</Link>
              </li>
              <li>
                <Link to="/home-onepage">Home One Page</Link>
              </li>
            </ul>
          </div>
        </li>
        <li onMouseEnter={navMouseEnter} onMouseLeave={navMouseLeave}>
          Company
          <KeyboardArrowDownIcon />
          <div className="subMenu">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/single-team">Single Team</Link>
              </li>
              <li onMouseEnter={navMouseEnter} onMouseLeave={navMouseLeave}>
                <Link to="/portfolio">
                  Portfolio
                  <ChevronRightIcon />
                </Link>
                <div className="subMenu">
                  <ul>
                    <li>
                      <Link to="/">Portfolio 3 Column</Link>
                    </li>
                    <li>
                      <Link to="/">Portfolio 4 Column</Link>
                    </li>
                    <li>
                      <Link to="/">Portfolio Full 3 Column</Link>
                    </li>
                    <li>
                      <Link to="/">Portfolio Full 4 Column </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li onMouseEnter={navMouseEnter} onMouseLeave={navMouseLeave}>
          Services
          <KeyboardArrowDownIcon />
          <div className="subMenu">
            <ul>
              <li>
                <Link to="/">Services 3 Column</Link>
              </li>
              <li>
                <Link to="/">Services 4 Column</Link>
              </li>
              <li>
                <Link to="/">Services Full 3 Column</Link>
              </li>
              <li>
                <Link to="/">Services Full 4 Column </Link>
              </li>
            </ul>
          </div>
        </li>
        <li onMouseEnter={navMouseEnter} onMouseLeave={navMouseLeave}>
          Blog
          <KeyboardArrowDownIcon />
          <div className="subMenu">
            <ul>
              <li>
                <Link to="/">Blog 3 Column</Link>
              </li>
              <li>
                <Link to="/">Blog 4 Column</Link>
              </li>
              <li>
                <Link to="/">Blog Full 3 Column</Link>
              </li>
              <li>
                <Link to="/">Blog Full 4 Column </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="ms-4 startHere pe-0">
          <Link to="/start-here" >Start Here</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;

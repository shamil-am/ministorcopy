import React, { useEffect, useState } from "react";
import "./recentWorks.scss";
import Filterizr from "filterizr";
import { Link } from "react-router-dom";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import LinkIcon from "@material-ui/icons/Link";

//images
import watch from "../../assets/images/ministor-port1.jpg";
import coffe from "../../assets/images/ministor-port2.jpg";
import radio from "../../assets/images/ministor-port3.jpg";
import scissors from "../../assets/images/ministor-port4.jpg";
import vase from "../../assets/images/ministor-port5.jpg";
import flower from "../../assets/images/ministor-port6.jpg";

/////
function RecentWorks() {
  useEffect(() => {
    const options = {};
    const filterizr = new Filterizr(".filter-container", options);
    [...document.querySelectorAll(".categoryBtn")][0].classList.add("active");
  });

  const makeActive = (e) => {
    const allCategory = document.querySelectorAll(".categoryBtn");
    console.log();
    [...allCategory].forEach((category) => {
      category.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  //
  return (
    <div className="recentWorks">
      <div className="container d-flex flex-column">
        <div className="row recentWorkHeader">
          <div className="col-12">
            <div className="textSide">
              <h2>Our Recent Works</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="selectionSide">
              <ul>
                <li
                  data-filter="all"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  All Work
                </li>
                <li
                  data-filter="1"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  Business
                </li>
                <li
                  data-filter="2"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  Design
                </li>
                <li
                  data-filter="3"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  It
                </li>
                <li
                  data-filter="4"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  Marketing
                </li>
                <li
                  data-filter="5"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  Responsive
                </li>
                <li
                  data-filter="6"
                  className="categoryBtn"
                  onClick={makeActive}
                >
                  Web Design
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row recentWorkDisplay">
          <div className="filter-container col-12">
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="1,3"
              data-sort="value"
            >
              <img src={watch} alt="watch" />
              <div className="imageTextHolder">
                <h5>Demo Media Title 1</h5>
                <p>Business,It</p>
              </div>
              <div className="imageLinkHolder">
                <Link to="/">
                  <ControlCameraIcon />
                </Link>
                <Link to="/">
                  <LinkIcon />
                </Link>
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="1,5,6"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={scissors} alt="scissors" />
                <div className="imageTextHolder">
                  <h5>Demo Media Title 1</h5>
                  <p>Business,It</p>
                </div>
                <div className="imageLinkHolder">
                  <Link to="/">
                    <ControlCameraIcon />
                  </Link>
                  <Link to="/">
                    <LinkIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="2,5"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={coffe} alt="coffe" />
                <div className="imageTextHolder">
                  <h5>Demo Media Title 1</h5>
                  <p>Business,It</p>
                </div>
                <div className="imageLinkHolder">
                  <Link to="/">
                    <ControlCameraIcon />
                  </Link>
                  <Link to="/">
                    <LinkIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="2,4"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={vase} alt="vase" />
                <div className="imageTextHolder">
                  <h5>Demo Media Title 1</h5>
                  <p>Business,It</p>
                </div>
                <div className="imageLinkHolder">
                  <Link to="/">
                    <ControlCameraIcon />
                  </Link>
                  <Link to="/">
                    <LinkIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="2,5"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={flower} alt="flower" />
                <div className="imageTextHolder">
                  <h5>Demo Media Title 1</h5>
                  <p>Business,It</p>
                </div>
                <div className="imageLinkHolder">
                  <Link to="/">
                    <ControlCameraIcon />
                  </Link>
                  <Link to="/">
                    <LinkIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="3,4"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={radio} alt="radio" />
                <div className="imageTextHolder">
                  <h5>Demo Media Title 1</h5>
                  <p>Business,It</p>
                </div>
                <div className="imageLinkHolder">
                  <Link to="/">
                    <ControlCameraIcon />
                  </Link>
                  <Link to="/">
                    <LinkIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentWorks;

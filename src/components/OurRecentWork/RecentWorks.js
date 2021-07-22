import React, { useEffect, useState } from "react";
import "./recentWorks.scss";
import Filterizr from "filterizr";

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
    // const options = { gutterPixels: 100 };
    const options = {};
    const filterizr = new Filterizr(".filter-container", options);
    // filterizr.setOptions({layout: 'sameSize'});
  });

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
                <li data-filter="all">All Work</li>
                <li data-filter="1">Business</li>
                <li data-filter="2">Design</li>
                <li data-filter="3">It</li>
                <li data-filter="4">Marketing</li>
                <li data-filter="5">Responsive</li>
                <li data-filter="6">Web Design</li>
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
              <div className="imageHolder">
                <img src={watch} alt="watch" />
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="1,5,6"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={scissors} alt="scissors" />
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="2,5"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={coffe} alt="coffe" />
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="2,4"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={vase} alt="vase" />
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="2,5"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={flower} alt="flower" />
              </div>
            </div>
            <div
              className="filtr-item col-12 col-md-6 col-lg-4"
              data-category="3,4"
              data-sort="value"
            >
              <div className="imageHolder">
                <img src={radio} alt="radio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentWorks;

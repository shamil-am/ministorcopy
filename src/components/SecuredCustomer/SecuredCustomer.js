import React from "react";
import "./securedCustomer.scss";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

//////////
function SecuredCustomer() {
  return (
    <div className="securedCustomer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
            <h2>With Decades of Experience We Secured 5400+ Customer</h2>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
            <div className="ourContactBtn">
              <Link to="/">
                our contact <ArrowRightAltIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuredCustomer; 

import React from "react";
import "./services.scss";
import ServiceCardCreator from "./ServiceCardCreator";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ComputerIcon from "@material-ui/icons/Computer";
import EventNoteIcon from "@material-ui/icons/EventNote";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import EditIcon from "@material-ui/icons/Edit";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
////
function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="servicesHeader">
          <div className="row">
            <div className="col-12">
              <div className="sectionHeader">
                <h1>Our services</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="servicesCards">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <ServiceCardCreator
                icon={<FlashOnIcon />}
                header="UNIQUE DESIGN"
                content="Lorem ipsum dolor sit amet, cons ctetuer adipiscing elit, sed diam nonummy nibh."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {" "}
              <ServiceCardCreator
                icon={<ComputerIcon />}
                header="RESPONSIVE"
                content="Lorem ipsum dolor sit amet, cons ctetuer adipiscing elit, sed diam nonummy nibh."
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              {" "}
              <ServiceCardCreator
                icon={<EventNoteIcon />}
                header="PAGE TEMPLATES"
                content="Lorem ipsum dolor sit amet, cons ctetuer adipiscing elit, sed diam nonummy nibh."
              />
            </div>
          <div className="col-12 col-md-6 col-lg-4">
            {" "}
            <ServiceCardCreator
              icon={<WbIncandescentIcon />}
              header="UNLIMITED"
              content="Lorem ipsum dolor sit amet, cons ctetuer adipiscing elit, sed diam nonummy nibh."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {" "}
            <ServiceCardCreator
              icon={<EditIcon />}
              header="WEB DESIGN"
              content="Lorem ipsum dolor sit amet, cons ctetuer adipiscing elit, sed diam nonummy nibh."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            {" "}
            <ServiceCardCreator
              icon={<CameraAltIcon />}
              header="GRAPHIC DESIGN"
              content="Lorem ipsum dolor sit amet, cons ctetuer adipiscing elit, sed diam nonummy nibh."
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

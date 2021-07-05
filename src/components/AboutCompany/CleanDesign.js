import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ComputerIcon from '@material-ui/icons/Computer';
import EventNoteIcon from '@material-ui/icons/EventNote';
import "./clearDesign.scss";
//////////
function CleanDesign() {
  return (
    <div className="cleanDesign">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="cardHolder">
              <div className="iconHolder">
                <CreateIcon />
              </div>
              <div className="textHolder">
                <h5 className="mt-3">Clean Designer</h5>
                <p>
                  Lorem ipsum dolor sit amet, ca adipisi cing , sed eiusmod
                  tempor incididunt labore .
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="cardHolder">
              <div className="iconHolder">
                <ComputerIcon />
              </div>
              <div className="textHolder">
              <h5 className="mt-3">RESPONSIVE</h5>
                <p>
                  Lorem ipsum dolor sit amet, ca adipisi cing , sed eiusmod
                  tempor incididunt labore .
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="cardHolder">
              <div className="iconHolder">
                <EventNoteIcon />
              </div>
              <div className="textHolder">
              <h5 className="mt-3">WEBSITE LAYOUT</h5>
                <p>
                  Lorem ipsum dolor sit amet, ca adipisi cing , sed eiusmod
                  tempor incididunt labore .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleanDesign;

import React from "react";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssessmentIcon from "@material-ui/icons/Assessment";
import About_1 from "../../assets/images/about_1.png";
import './about.scss'
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
///
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="sectionContent">
              <div className="sectionHeader">
                <h1>About Our Company</h1>
              </div>
              <div className="sectionText">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humor.
                </p>
              </div>
              <div className="sectionMission">
                <div className="iconSide">
                  <div className="iconWrapper">
                    <EventNoteIcon />
                  </div>
                </div>
                <div className="iconTextSide">
                  <h5>OUR MISSION</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consect etuer adipiscing. dolor
                    aesit
                  </p>
                </div>
              </div>
              <div className="sectionVision">
                <div className="iconSide">
                  <div className="iconWrapper">
                    <AssessmentIcon />
                  </div>
                </div>
                <div className="iconTextSide">
                  <h5>OUR MISSION</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consect etuer adipiscing. dolor
                    aesit
                  </p>
                </div>
              </div>
              <div className="aboutUsBtn">
                <Link to="/">More About Us <ArrowRightAltIcon/></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="sectionImage">
              <img src={About_1} alt="about" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

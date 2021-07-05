import React from "react";

function ServiceCardCreator(props) {
  return (
    <div className="serviceCard">
      <div className="cardIconSide">
        <div className="iconWrapper">{props.icon}</div>
      </div>
      <div className="cardTextSide">
        <h5>{props.header}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default ServiceCardCreator;

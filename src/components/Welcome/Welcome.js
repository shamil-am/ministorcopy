import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./welcome.scss";
import Typist from "react-typist";

///
function Welcome() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  ///////
  return (
    // Welcome section
    <div className="welcome row">
      <div className="col-12">
        <div className="animatedInfo">
          <div className="textHolder">
            <h2 className="mb-3">Welcome to minimal</h2>
            {count ? (
              <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                <span>I'm a Web developer</span>
                <Typist.Backspace count={20} delay={800} />
                <span> I'm a web designer</span>
                <Typist.Backspace count={20} delay={800} />
                <span> Ministor is your</span>
                <Typist.Backspace count={20} delay={800} />
                <span> Solution</span>
                <Typist.Backspace count={20} delay={800} />
              </Typist>
            ) : (
              ""
            )}
          </div>
          <div className="contactUS mt-3">
            <Link to="/contact">contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

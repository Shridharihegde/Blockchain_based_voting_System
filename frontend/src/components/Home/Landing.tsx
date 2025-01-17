import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="logo">
          <img src="logo.png" />
        </div>

        <div className="title-large">e-Voting</div>
        <div className="title-large">System</div>
        <div className="title-small">Secure Smart Immuatable</div>

        <div className="button-wrapper">
          <Link to="/login">
            <button className="button-black">Login</button>
          </Link>

          <Link to="/view">
            <button>View Votes</button>
          </Link>
        </div>
      </div>

      <div className="right">
        <img src="voter.gif" />
      </div>
    </div>
  );
};

export default Landing;

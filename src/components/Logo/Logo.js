import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2 parallax-effect"
        style={{
          height: "150px",
          width: "150px",
        }}
        perspective={500}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

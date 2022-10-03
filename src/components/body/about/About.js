import React from "react";
import "./About.css";
import "../../common/SocialContact";
import SocialContact from "../../common/SocialContact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Saurabh Pandey.</span>
          <br /> a <span className="pro1">competitive programmer</span>  & a{" "}
          <span className="pro1">developer</span> .
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assests/me.jpg").default}
            className="info-image"
            alt="Arnav Ranjan"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

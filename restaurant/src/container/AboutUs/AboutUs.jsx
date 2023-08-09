import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import { SubHeading } from "../../components";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div
        className="app__aboutus-content-about flex__center"
        style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
      >
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae culpa
          iste odio doloremque, velit distinctio eius vitae, sapiente aliquid id
          pariatur reiciendis itaque odit? Modi est nemo tempora debitis
          recusandae.
        </p>
        <div className="button-div">
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
      <img
        src={images.knife}
        alt="knife"
        className="app__aboutus-content-knife"
      />
      <div
        className="app__aboutus-content-history flex__center"
        style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
      >
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae culpa
          iste odio doloremque, velit distinctio eius vitae, sapiente aliquid id
          pariatur reiciendis itaque odit? Modi est nemo tempora debitis
          recusandae.
        </p>
        <div className="button-div">
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;

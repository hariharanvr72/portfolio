import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with ability in creating visually appealing and user-friendly websites.I have a strong knowledge of design and a Keen eye for detail. Im proficient in HTML,CSS and JavaScript, as well as testing a software.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX </h2>
                <p>Design and Develop the application and evaluating user requirements</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>Designing engaging and responsive landing pages and Conducting website testing</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Mobile Application</h2>
                <p>Troubleshoot and debug to optimize performance.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default skills;

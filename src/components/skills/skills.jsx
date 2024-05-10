import React from "react";
import "./skills.css";
import BackendIcon from "../../assets/backend.png";
import FrontendIcon from "../../assets/frontend.png";
import DatabaseIcon from "../../assets/database.png";

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillContent">
        With one Year Experience As a Professional Developer. I Have acquired
        The Skills and Knowledge To Make Your Project successful.
      </span>
      <div className="skillBoxs">
        <div className="skillBox">
          <img src={FrontendIcon} alt="FrontEnd" className="skillBoxImg" />
          <div className="skillBoxText">Frontend Development</div>
        </div>
        <div className="skillBox">
          <img src={BackendIcon} alt="Backend" className="skillBoxImg" />
          <div className="skillBoxText">Backend Development</div>
        </div>
        <div className="skillBox">
          <img src={DatabaseIcon} alt="DataBase" className="skillBoxImg" />
          <div className="skillBoxText">Database Management</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

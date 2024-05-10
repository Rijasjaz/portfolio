import React from "react";
import "./works.css";
import Empty from "../../assets/empty.png";
import School from "../../assets/school.png";

export const Works = () => {

  const schoolUrl = () => {
    window.location.href = "https://github.com/Rijasjaz/Student-Management/";
  };

  return (
    <section id="works">
      <span className="worksTitle">Portfolio</span>
      <div className="worksBoxs">
        <div className="worksBox">
          <img src={School} alt="School" className="worksImg" onClick={schoolUrl}/>
          <div className="worksBoxText">School Management</div>
        </div>
        <div className="worksBox">
          <img src={Empty} alt="Empty" className="worksImg" />
          <div className="worksBoxText">In Progress</div>
        </div>
        <div className="worksBox">
          <img src={Empty} alt="Empty" className="worksImg" />
          <div className="worksBoxText">In Progress</div>
        </div>
      </div>
    </section>
  );
};

export default Works;

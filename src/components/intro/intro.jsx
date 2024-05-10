import React from "react";
import "./intro.css";
import bg from "../../assets/picture.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hi">Hi, I'm Rijas</span>
        <span className="developer">Fullstack developer</span>
        <p className="introPara">
          Skilled developer with experience in creating web applications.
        </p>
        {/* <Link>
          <button className="downloadcv">Download CV</button>
        </Link> */}
      </div>

      <img src={bg} alt="profile" className="introImage" />
    </section>
  );
};

export default Intro;

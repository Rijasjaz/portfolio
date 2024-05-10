import React, { useRef } from "react";
import "./contact.css";
import LinkedinImg from "../../assets/linkedin.png";
import GithubImg from "../../assets/github.png";
import InstaImg from "../../assets/instalogo.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const linkedInUrl = () => {
    window.location.href = "https://www.linkedin.com/in/rijask/";
  };
  const githubUrl = () => {
    window.location.href = "https://github.com/Rijasjaz/";
  };
  const instaUrl = () => {
    window.location.href = "https://www.instagram.com/rijas_meeran";
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k0lzoo7",
        "template_dq6vef6",
        form.current,
        "GsBy9Ec6KSfibZBdR"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
          alert("Email not Sent !");
        }
      );
  };

  return (
    <section className="contact">
      <span className="contactTitle">Contact</span>
      <span className="contactNumber">Mobile Number : +971 55 759 1343</span>
      <span className="contactDetails">
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="message"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button
            className="submitButton"
            type="submit"
            value="Send"
            onSubmit={sendEmail}
          >
            Submit
          </button>
          <div className="links">
            <img
              src={LinkedinImg}
              alt="LinkedinImg"
              className="link"
              onClick={linkedInUrl}
            />
            <img
              src={GithubImg}
              alt="GithubImg"
              className="link"
              onClick={githubUrl}
            />
            <img
              src={InstaImg}
              alt="InstaImg"
              className="link"
              onClick={instaUrl}
            />
          </div>
        </form>
      </span>
    </section>
  );
};

export default Contact;

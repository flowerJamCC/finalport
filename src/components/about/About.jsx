import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="banner"></div>
      <div className="about-main">
        <div className="prof-left"></div>
        <div className="prof-right">
          <article className="about-me-text">
            <h3 className="about-title">About Me ..</h3>
            <p>
              H1, my name is Ghassan, and I wake up every day excited to learn
              new cutting edge techniques for developing smooth and modern
              web-site experiences. I am already fluent in technologies such as
              React.js, Firebase, JavaScript, TypeScript, HTML, and CSS. Below
              you will find some examples of my skills.
              <br />
              <br />I hope you find the rest of my portfolio as enjoying as it
              was for me to make it {":)"}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./contact.css";

import Resume2 from "../../resfold/Resume2.docx";

const Res_2 = Resume2;

const Resume_URL = "http://localhost:3001/Resume1.docx";

const Contact = () => {
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = Res_2;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-left">
          <h5 className="contact-info-title">Contact - info</h5>
          <div className="contact-bits">
            <p>Phone Number: 0593637780</p>
            <p>Email Adress: Ghassaan31@Gmail.com</p>
            <p>LinkedeIn: http://www.linkedin.com/ghassan31</p>
          </div>
        </div>
        <div className="contact-right">
          <button
            className="res-button"
            onClick={() => {
              handleDownload(Resume_URL);
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

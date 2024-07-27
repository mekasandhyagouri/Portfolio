import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandhya Meka </span>
            from <span className="purple"> Odisha, India.</span>
            <br />I am a dedicated System Engineer at Tata Consultancy Services (TCS) with a strong background in Electronics and Telecommunication Engineering. 
            With expertise in Java, C, and JavaScript, I specialize in developing and maintaining high-performance software applications. 
            Currently, I am working on a Product Lifecycle Management project, where I collaborate with cross-functional teams to deliver 
            innovative and efficient solutions. My passion for technology drives me to continuously learn and implement best practices in 
            software development to optimize system performance and user satisfaction.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sandhya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

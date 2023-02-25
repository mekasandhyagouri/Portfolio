import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WhatsApp from "../../Assets/Projects/whatsapp.PNG";
import superMario from "../../Assets/Projects/supermario.png";
import kalasa from "../../Assets/Projects/Kalasa.png";
import Netflix from "../../Assets/Projects/netflix.PNG";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix-Clone"
              description="This project is a simplified front end clone of Netflix build with react.js, Material-UI, and Firebase. Have features which allows user for realtime streaming of trailers of movies, and can see which movies are trending."
              link="https://netflix-clone-8d8e6.web.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WhatsApp}
              isBlog={false}
              title="Whatsapp-Clone"
              description="Whatsapp Clone is a progressive web application that clones the WhatsApp web, which is created for one-to-one messaging using ReactJs, MongoDb, Express and NodeJs, and Firebase."
              link="https://euphonious-dusk-f89e99.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superMario}
              isBlog={false}
              title="Super Mario Game"
              description="This simple Mario Game project is written in Python.GUI uses pygame library. Talking about the gameplay,
               it’s a single player game, where the player (Mario) has to dodge fireballs coming out from the dragon.
                The main objective of this game is to gain the highest score and level up. Each level comes with more 
                difficulties, the area gets smaller and smaller as soon as there’s an increment in level."
              link="https://github.com/mekasandhyagouri/SuperMarioGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalasa}
              isBlog={false}
              title="Kalasa Web App"
              description="This simple Frontend website is created using ReactJs, Material-UI, Redux and Firebase. And the User Interface is designed in Figma and adobe. It is a web application which allows users to create an account as Priest,Visitor or Temple, and then can explore nearby temples and can also book for an event in the temple."
              link="https://github.com/mekasandhyagouri/kalasa-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

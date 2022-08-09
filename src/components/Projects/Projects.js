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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

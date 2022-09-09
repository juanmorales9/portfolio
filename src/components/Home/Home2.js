import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImg2 from "../../Assets/avatar.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UNA  <span className="purple"> INTRODUCCIÓN </span> DE MI 
            </h1>
            <p className="home-about-body">
              
              <br />
              <br />Manejo lenguajes como 
              <i>
                <b className="purple"> Javascript , HTML , CSS , JAVA  </b>
              </i>
              <br />
              <br />
              Mi campo de interés es la creación de nuevas tecnologías y productos web y              <i>
                <b className="purple">también en áreas relacionadas con el aprendizaje profundo y el procesamiento del lenguaje natural. </b> 
                {" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
              <i>También manejo el sistema    <b className="purple"> GIT</b> de control de versiones </i>
              <br /> 

              <br />
              <i>También tengo conocimientos en bases de datos como   <b className="purple"> MYSQL , FIREBASE</b> </i>
              <br />
              <br />
              Me gustaria formar parte de una empresa que me de la oportunidad de trabajar como 
                <b className="purple"> Back End</b> y
              <i>
                <b className="purple">
                  {" "}
                  aumentar mi experiencia laboral
                </b>
              </i>
              &nbsp; en
              <i>
                <b className="purple"> Java con Spring Boot  </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUENTRAME EN </h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juanmorales9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juanmorales9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/juanimorales9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

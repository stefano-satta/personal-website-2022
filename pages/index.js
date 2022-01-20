import { Container } from "react-bootstrap";
import Contact from "../components/feature/section-page/Contact";
import Project from "../components/feature/section-page/Project";
import FirstViewport from "../components/feature/section-page/FirstViewport";
import About from "../components/feature/section-page/About";
import React from "react";


const Home = () => {

  return (<>
      <FirstViewport/>
        <Container className="bg-dark">
          <About/>
          <Project/>
          <Contact/>
        </Container>
  </>)
}

export default Home;
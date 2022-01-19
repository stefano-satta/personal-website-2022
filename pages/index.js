import { Container } from "react-bootstrap";
import Contact from "../components/feature/section-page/Contact";
import Project from "../components/feature/section-page/Project";
import FirstViewport from "../components/feature/section-page/FirstViewport";
import About from "../components/feature/section-page/About";


const Home = () => {

  return (
    <Container className="bg-dark">
      <FirstViewport/>
      <About/>
      <Project/>
      <Contact/>
    </Container>
  )
}

export default Home;
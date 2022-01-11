import { Col, Container, Row } from "react-bootstrap";
import Img from 'next/image'
import Bubble from "../components/common/bubble/Bubble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab)


const Home = () => {

  return (
    <Container className="bg-dark">
      <Row className="" style={{height: 'calc(100vh - 86px)'}}>
        <Col xs={12} md={7} className="d-flex align-items-center position-relative">
          <Bubble style={{top: '8%', right: '12%'}}>
            <FontAwesomeIcon icon={['fab', 'react']} size={'3x'} className="bg-icon-react"/>
          </Bubble>
          <div>
            <p className="fs-3 mb-0 text-light-grey">
              <span className="pe-3">Hi, there!</span> 
              <Img src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" width={40} height={40} className=""/> 
            </p>
            <h1 className="text-uppercase text-family-montserrat" style={{fontSize: '5.375rem',}}>Stefano<br/> Satta</h1>
            <div className="bg-primary w-50 p-1"></div>
          </div>
          <Bubble style={{bottom: '8%', left: '40%'}}>
            <FontAwesomeIcon icon={['fab', 'js']} size={'3x'} className="bg-icon-javascript"/>
          </Bubble>
        </Col>
        <Col xs={12} md={5} className="d-flex align-items-center position-relative">
          <div>
            <h2 className="fs-1">Full Stack<br/><span className="text-primary">Javascript</span> Developer</h2>
            <p className="text-light-grey">Experience in developing, testing and debugging web applications and websites</p>
            <a className="btn btn-outline-primary mt-3 px-3 py-2 text-uppercase" href="mailto:stefanosatta@outlook.com">Contact Me</a>
          </div>
          <Bubble style={{bottom: '20%', right: '25%'}}>
            <FontAwesomeIcon icon={['fab', 'angular']} size={'3x'} className="bg-icon-angular"/>
          </Bubble>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
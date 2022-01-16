import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Bubble from "../components/common/bubble/Bubble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab)

import rxjsLogo from '../public/rxjs-logo.svg'
import webpackLogo from '../public/webpack-logo.png'
import nextjsLogo from '../public/nextjs-logo.png'
import Image from "next/image";
import Link from 'next/link';
import { PROJECTS } from "../utility/project-list";
import ProjectCard from "../components/common/project-card/ProjectCard";


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
              <Image src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" width={40} height={40} id="hand-greeting"/> 
            </p>
            <h1 className="text-uppercase text-family-montserrat" style={{fontSize: '5.375rem',}}>Stefano<br/> Satta</h1>
            <div className="bg-primary w-50 p-1"></div>
          </div>
          <Bubble style={{bottom: '8%', left: '40%'}}>
            <FontAwesomeIcon icon={['fab', 'js']} size={'3x'} className="bg-icon-javascript"/>
          </Bubble>
          {/* <div className="position-absolute" style={{bottom: '2%', right: '10%'}}>
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size={'2x'} className="text-grey"/>
          </div> */}
          
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


      <Row className="mt-5" id="about">
        <h2 className="fs-1 text-primary mb-4 fw-bold">What I Do</h2>
        <Col xs={12} md={6} className="d-flex align-items-center position-relative">
          <div>
            <p>For over eight years I had many opportunities to work in different projects, private and public administration. Having an experience of developing web applications and websites in different web technologies. <br /> My first passion is the frontend side but i have developed also in Nodejs/Express and MongoDB.</p>
            <p>I currently work at Accenture, Cagliari, IT.</p>
            <p>
              For more details, see my  
              <Link href={'https://www.linkedin.com/in/stefano-satta'} passHref>
                <a target="_blank" className="ms-2 text-primary text-decoration-none link">
                  Linkedin Profile
                </a>
              </Link>
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-lg-end position-relative">
          <div className="">
            <div className="mb-3 d-flex">
              <FontAwesomeIcon icon={['fab', 'html5']} size={'3x'} className="bg-icon-html me-4"/>
              <FontAwesomeIcon icon={['fab', 'css3-alt']} size={'3x'} className="bg-icon-css me-4"/>
              <FontAwesomeIcon icon={['fab', 'sass']} size={'3x'} className="bg-icon-sass me-4"/>
              <FontAwesomeIcon icon={['fab', 'js']} size={'3x'} className="bg-icon-javascript me-4"/>
              <FontAwesomeIcon icon={['fab', 'angular']} size={'3x'} className="bg-icon-angular me-4"/>
              <Image src={rxjsLogo} width={50} height={50}/>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon icon={['fab', 'react']} size={'3x'} className="bg-icon-react me-4"/>
              <Image src={nextjsLogo} width={50} height={50}/>
              <FontAwesomeIcon icon={['fab', 'node']} size={'3x'} className="bg-icon-node me-4 ms-4"/>
              <Image src={webpackLogo} width={50} height={50} className="text-less-grey"/>
              <FontAwesomeIcon icon={['fab', 'git-alt']} size={'3x'} className="ms-4 bg-icon-git"/>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-5" id="project">
        <h2 className="fs-1 text-primary mb-4 fw-bold">Project</h2>
        <p>A small list of projects chosen by me.</p>
        <div className="mt-3 d-flex flex-wrap justify-content-between">
          {
            PROJECTS.map( (project, index) => (
              <ProjectCard project={project} key={`${project.name}-${index}`}/>
            ))
          }
        </div>
      </Row>
    </Container>
  )
}

export default Home;
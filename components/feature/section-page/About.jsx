import Image from "next/image";
import Link from 'next/link';
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab);
import rxjsLogo from '../../../public/rxjs-logo.svg'
import nextjsLogo from '../../../public/nextjs-logo.png'
import webpackLogo from '../../../public/webpack-logo.png'


const About = () => {
    
    return (
        <Row className="mt-5" id="about">
            <h2 className="fs-1 text-primary mb-4 fw-bold">What I Do</h2>
            <Col xs={12} md={6} className="d-flex align-items-center position-relative mb-4">
                <div>
                    <p>For over eight years I had many opportunities to work in different projects, private and public administration. Having an experience of developing web applications and websites in different web technologies. <br /> My first passion is the frontend side but I have developed also in Nodejs/Express and MongoDB.</p>
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
    )
}

export default About;
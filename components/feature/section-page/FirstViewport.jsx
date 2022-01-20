import {Row, Col} from 'react-bootstrap'
import Bubble from '../../common/bubble/Bubble'
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import React from "react";
library.add(fab)


const FirstViewport = () => {

    return (
        <Row style={{height: 'calc(100vh - 86px)'}} className="g-0">


            {/*<Bubble style={{bottom: '20%', right: '25%'}}>
                <FontAwesomeIcon icon={['fab', 'angular']} size={'3x'} className="bg-icon-angular"/>
            </Bubble>
            <Bubble style={{bottom: '8%', left: '40%'}}>
                <FontAwesomeIcon icon={['fab', 'js']} size={'3x'} className="bg-icon-javascript"/>
            </Bubble>
            <Bubble style={{top: '8%', right: '12%'}}>
                <FontAwesomeIcon icon={['fab', 'react']} size={'3x'} className="bg-icon-react"/>
            </Bubble>*/}


            <h1 className="text-end animate__animated animate__fadeInLeft" style={{fontSize: '13.0952380952vw'}}>Stefano Satta</h1>
            <Col xs={12} md={9}>
                <h2 className="text-start animate__animated animate__fadeInRight" style={{fontSize: '13.0952380952vw'}}>JavaScript<br/><span className="text-primary">Frontend</span>Dev</h2>
            </Col>
            <Col xs={12} md={3} className={"d-flex justify-content-start justify-content-xxl-center flex-column align-items-end pe-3 animate__animated animate__slideInUp animate__delay-1s"}>
                <p className="text-light-grey text-end fs-3">Experience in developing, testing and debugging web applications and websites</p>
                <Link href="mailto:stefanosatta@outlook.com">
                    <a className="btn btn-outline-primary mt-3 px-3 py-2 text-uppercase" >Contact Me</a>
                </Link>
            </Col>
        </Row>
    )
}

export default FirstViewport;
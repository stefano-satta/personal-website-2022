import {Row, Col} from 'react-bootstrap'
import Bubble from '../../common/bubble/Bubble'
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab)


const FirstViewport = () => {
    return (
        <Row style={{height: 'calc(100vh - 86px)'}}>
            <Col xs={12} md={7} className="d-flex align-items-center position-relative">
                <Bubble style={{top: '8%', right: '12%'}}>
                    <FontAwesomeIcon icon={['fab', 'react']} size={'3x'} className="bg-icon-react"/>
                </Bubble>
                <div>
                    <p className="fs-3 mb-0 text-light-grey">
                    <span className="pe-3">Hi, there!</span> 
                    <Image src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" width={40} height={40} id="hand-greeting"/> 
                    </p>
                    <h1 className="text-uppercase text-family-montserrat fs-name" >Stefano<br/> Satta</h1>
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
                    <Link href="mailto:stefanosatta@outlook.com">
                    <a className="btn btn-outline-primary mt-3 px-3 py-2 text-uppercase" >Contact Me</a>
                    </Link>
                </div>
                <Bubble style={{bottom: '20%', right: '25%'}}>
                    <FontAwesomeIcon icon={['fab', 'angular']} size={'3x'} className="bg-icon-angular"/>
                </Bubble>
            </Col>
        </Row>
    )
}

export default FirstViewport;
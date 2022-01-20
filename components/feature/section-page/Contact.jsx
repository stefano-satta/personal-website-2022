import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab)

const Contact = () => {
    const [showClipboard, setClipboard] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setClipboard(false)
        }, 3000);
    }, [showClipboard])


    return (
        <Row className="mt-5" id="contact">
            <h2 className="text-primary mb-4 fw-bold fs-title-section">Wanna be <br />starting something
                <br /> together ?</h2>
            <Col xs={12} md={6} className="mb-4">
                <p className="mt-4 fs-4">Open to new freelance projects. <br/> If you have any question, feel free to contact me.</p>
                <ul className="mt-4 fs-4 ps-0">
                    <li className="list-unstyled mb-2">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="me-3" />
                    <Link href={'https://www.linkedin.com/in/stefano-satta'} passHref>
                        <a target="_blank" className="text-white text-decoration-none link">
                        https://www.linkedin.com/in/stefano-satta
                        </a>
                    </Link>
                    </li>
                    <li className="list-unstyled mb-2">
                    <FontAwesomeIcon icon={['fab', 'github']} className="me-3"/>
                    <Link href="https://github.com/stefano-satta" passHref>
                        <a target={'_blank'} className="text-white text-decoration-none link">
                        https://github.com/stefano-satta
                        </a>
                    </Link>
                    </li>
                    <li className="list-unstyled mb-2">
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="me-3"/>
                    Sardinia, IT
                    </li>
                </ul>
            </Col>
            <Col xs={12} md={6}>
                <div className="position-relative py-5 px-3 mt-5" id="contact-mail">
                    {
                    showClipboard && 
                    <span className="bg-less-dark py-2 px-3 position-absolute rounded-3 comics" 
                            style={{bottom: '110px', left: '50px'}}>
                            Mail copied! 📋
                    </span>
                    }
                    <div className="text-decoration-none cursor-pointer text-white link" 
                        style={{fontSize: '2.5rem'}}
                        onClick={() => setClipboard(!showClipboard)}>
                        stefanosatta@outlook.com
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Contact;
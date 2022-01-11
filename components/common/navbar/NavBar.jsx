import { Navbar, Container, Nav } from "react-bootstrap";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, fab);


const NavBar = () => {

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-primary fs-1">S
                    {/* <span className="fw-bold">Stefano</span><span>Satta</span> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white custom-toggler"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">About</Nav.Link>
                        <Nav.Link href="#home" className="text-white">Projects</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-none d-lg-block">
                    <Link href={'mailto:stefanosatta@outlook.com'} passHref>
                        <FontAwesomeIcon icon={['fas', 'envelope']} size={'2x'} className="me-3 cursor-pointer" />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/stefano-satta'} passHref>
                        <a target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'} className="me-3 text-white" />
                        </a>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/stefano-satta'} passHref>
                        <a target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github']} size={'2x'} className="text-white" />
                        </a>
                    </Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar;
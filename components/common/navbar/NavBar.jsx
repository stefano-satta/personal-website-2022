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
                        <Link href={'/'} passHref><Nav.Link className="text-white link me-4">Home</Nav.Link></Link>
                        <Link href={'#about'} passHref><Nav.Link href="#about" className="text-white link me-4">About</Nav.Link></Link>
                        <Link href={'#project'}><Nav.Link href="#project" className="text-white link me-4">Project</Nav.Link></Link>
                        <Link href={'#contact'}><Nav.Link href="#contact" className="text-white link me-4">Contact</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-none d-lg-block">
                    <Link href={'mailto:stefanosatta@outlook.com'} passHref>
                        <a href="" className="link-icon me-3 cursor-pointer">
                            <FontAwesomeIcon icon={['fas', 'envelope']} size={'2x'} className="" />
                        </a>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/stefano-satta'} passHref>
                        <a target="_blank" className="link-icon me-3">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'} />
                        </a>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/stefano-satta'} passHref>
                        <a target="_blank" className="link-icon">
                            <FontAwesomeIcon icon={['fab', 'github']} size={'2x'} className="" />
                        </a>
                    </Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar;
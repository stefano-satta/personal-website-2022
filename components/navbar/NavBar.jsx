import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-white">S
                    {/* <span className="fw-bold">Stefano</span><span>Satta</span> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#home" className="text-white">Projects</Nav.Link>
                        <Nav.Link href="#link" className="text-white">GitHub</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
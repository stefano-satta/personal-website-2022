import { Col, Container, Row } from "react-bootstrap";
import Img from 'next/image'

export default function Home() {
  return (
    <Container className="bg-dark">
      <Row className="pt-5">
        <Col xs={12} md={7}>
          <div className="pt-5">
            <p className="fs-3 mb-0 text-light-grey">Hi, there! <Img src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" width={50} height={50}/> </p>
            <h1 className="text-uppercase text-family-montserrat" style={{fontSize: '86px',}}>Stefano<br/> Satta</h1>
            <div className="bg-primary w-50 p-1"></div>
          </div>
        </Col>
        <Col xs={12} md={5} className="pt-4">
          <div className="pt-5 mt-5">
            <h2 className="fs-1">Full Stack<br/><span className="text-primary">Javascript</span> Developer</h2>
            <p className="text-light-grey">Experience in designing and developing user interfaces, testing & debugging.
              Able to work independently and within a team.
              Creating clean, testable, maintainable and functional code is the highest priority.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

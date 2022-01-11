import { Container } from "react-bootstrap"
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

const RouterLayout = ({children}) => {

    return (<>
        <NavBar/>
            <main>
                <Container fluid className="p-0 bg-dark">
                    {children}
                </Container>
            </main>
        <Footer/>
    </>)
}

export default RouterLayout;
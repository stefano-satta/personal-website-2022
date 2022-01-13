import Head from "next/head";
import { Container } from "react-bootstrap"
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

const RouterLayout = ({children}) => {

    return (<>
        <Head>
            <title>Stefano Satta - JS Dev</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
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
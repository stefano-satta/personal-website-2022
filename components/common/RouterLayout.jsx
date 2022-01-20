import Head from "next/head";
import { Container } from "react-bootstrap"
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import React, {useEffect, useState} from "react";
import InitialLoader from "./loader/InitialLoader";



const RouterLayout = ({children}) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2500)
    },[])


    return (<>

        <Head>
            <title>Stefano Satta - JS Dev</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        { loader && <InitialLoader/>}


        { !loader && (<>
            <NavBar/>
            <main>
                <Container fluid className="p-0 bg-dark">
                    {children}
                </Container>
            </main>
            <Footer/>
        </>)
        }

    </>)
}

export default RouterLayout;
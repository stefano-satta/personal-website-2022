import Head from "next/head";
import { Container } from "react-bootstrap"
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import React, {useEffect, useState} from "react";
import Image from "next/image";


const Loader = () => (<>
    <div>
        <p className="fs-3 mb-0 text-light-grey">
            <span className="pe-3">Hi, there!</span>
            <Image src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" width={40} height={40} id="hand-greeting"/>
        </p>
        <h1 className="text-uppercase text-family-montserrat fs-name" >Stefano<br/> Satta</h1>
        <div className="bg-primary w-50 p-1"/>
    </div>
    <p className="text-primary">loader</p>
</>)



const RouterLayout = ({children}) => {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 3000)
    },[])


    return (<>

        <Head>
            <title>Stefano Satta - JS Dev</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        { loader && <Loader/> }
        { !loader && (<>
            <NavBar/>
            <main>
                <Container fluid className="p-0 bg-dark">
                    {children}
                </Container>
            </main>
            <Footer/>
        </>)}


    </>)
}

export default RouterLayout;
import Head from "next/head";
import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";
import React, {useEffect, useState} from "react";
import InitialLoader from "./loader/InitialLoader";
import { useRouter } from "next/router";
import Custom404Page from '../../pages/404'


const RouterLayout = ({children}) => {
    const [loader, setLoader] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1500)
    },[])


    return (<>

        <Head>
            <title>Stefano Satta - JS Dev</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        { 
            router.pathname === '/404' ? <Custom404Page/> :
                loader ? <InitialLoader/> : (<>
                    <NavBar/>
                        <main className="bg-dark" style={{marginTop: '50.64px'}}>
                            {children}
                        </main>
                    <Footer/>
                </>)
        }



        {/* { loader && <InitialLoader/>}

        { !loader && router.pathname !== '/404' ? (<>
            <NavBar/>
                <main className="bg-dark" style={{marginTop: '50.64px'}}>
                    {children}
                </main>
            <Footer/>
        </>) : 
        } */}

    </>)
}

export default RouterLayout;
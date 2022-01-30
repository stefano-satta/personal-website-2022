import Link from 'next/link';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import React from "react";
import Planet from "../../common/universe/Planet";
import Star from "../../common/universe/Star";
import Sun from "../../common/universe/Sun";
import Ufo from '../../common/universe/Ufo';
library.add(fab)


const FirstViewport = () => {

    return (
        <div className="w-100 vh-100 bg-dark overflow-hidden position-relative" id="first-view">
            <Star top={'13%'} right={'53%'}/>
            <Star top={'70%'} right={'30%'}/>
            <Star top={'5%'} right={'33%'}/>
            <Star top={'44%'} right={'40%'}/>
            <Star top={'40%'} right={'22%'}/>
            <Star top={'90%'} right={'5%'}/>
            <Star top={'10%'} right={'10%'}/>
            <Star top={'95%'} right={'50%'}/>
            <Star top={'15%'} right={'95%'}/>
            <Star top={'25%'} right={'33%'}/>
            <Star top={'55%'} right={'3%'}/>
            <Star top={'65%'} right={'45%'}/>
            <Star top={'88%'} right={'29%'}/>
            <Star top={'88%'} right={'89%'}/>
            <Star top={'18%'} right={'78%'}/>
            <Star top={'38%'} right={'65%'}/>
            <Star top={'55%'} right={'70%'}/>
            <Star top={'45%'} right={'55%'}/>
            <Star top={'45%'} right={'98%'}/>
            <Star top={'55%'} right={'82%'}/>
            <Star top={'69%'} right={'63%'}/>
            <Star top={'75%'} right={'73%'}/>
            <Sun/>
            <Ufo/>
            <div className="d-flex flex-column align-items-end justify-content-end justify-content-md-center px-5 first__view-head text-end">
                <h1>Stefano Satta</h1>
                <h2 className="bg-primary fs-1 text-dark px-1 py-2 rounded-3">Frontend developer</h2>
                <p className="text-light-grey text-end fs-5 mt-5">Experience in developing, testing and <br />  debugging web applications and websites</p>
                <Link href="mailto:stefanosatta@outlook.com">
                    <a className="btn btn-outline-primary mt-3 px-3 py-2 text-uppercase" >Contact Me</a>
                </Link>
            </div>
            <Planet/>
        </div>
    )
}

export default FirstViewport;
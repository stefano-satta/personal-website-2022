import Image from "next/image";
import React, {useEffect, useRef} from "react";

const InitialLoader = () => {
    const counterText = useRef();

    useEffect(() => {
        animateValue(counterText.current, 0, 100, 1500)
    }, [])

    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }


    return (<>
        <div className="w-100 vh-100 bg-dark d-flex justify-content-center align-items-center">
            <div className="position-absolute text-center w-100 vh-100 d-flex justify-content-center align-items-center"
                 style={{zIndex: 1, fontSize: '22.0952380952vw', opacity: .2}}
                 ref={counterText}>
            </div>
            <div className="position-relative" style={{zIndex: 10}}>
                <p className="mb-0 text-white" style={{fontSize: '13.0952380952vw'}}>
                    <span className="pe-3">Hi, there!</span>
                    <Image src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" width={40} height={40} id="hand-greeting" alt={'greeting'}/>
                </p>
            </div>
        </div>
    </>)
}

export default InitialLoader;